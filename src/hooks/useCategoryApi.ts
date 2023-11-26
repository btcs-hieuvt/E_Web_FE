import { categoryApi } from "@/api/categoryApi";
import {
  categoryListState,
  selectedCategoryState,
  shouldFetchCategoryListSelector,
} from "@/atom/categoryAtom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { accessTokenState } from "@/atom/authAtom";
import { CategoryType } from "@/types/category";

const useCategoryApi = () => {
  const [categoryList, setCategoryList] = useRecoilState(categoryListState);
  const setSelectedCategory = useSetRecoilState(selectedCategoryState);
  const accessToken = useRecoilValue(accessTokenState);

  const shouldFetchCategoryList = useRecoilValue(
    shouldFetchCategoryListSelector
  );

  const getAllCategory = async () => {
    const res = await categoryApi.getAll();

    setCategoryList(res.result);
  };

  const addCategory = async (body: CategoryType) => {
    const rs = await categoryApi.createCategory(accessToken as string, body);
    getAllCategory();

    return rs;
  };

  const updateCategory = async (id: string, body: CategoryType) => {
    const rs = await categoryApi.updateCategory(
      accessToken as string,
      id,
      body
    );

    getAllCategory();
    return rs;
  };

  const deleteCategory = async (id: string) => {
    const rs = await categoryApi.deleteCategory(accessToken as string, id);

    getAllCategory();
    return rs;
  };

  useEffect(() => {
    if (shouldFetchCategoryList) {
      getAllCategory();
    }
  }, [shouldFetchCategoryList]);

  return {
    categoryList,
    getAllCategory,
    addCategory,
    updateCategory,
    deleteCategory,
    // getCategory,
  };
};

export default useCategoryApi;
