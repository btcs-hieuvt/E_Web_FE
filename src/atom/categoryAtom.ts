import { atom, selector } from "recoil";

export type Categorytype = {
  _id: string;
  name: string;
  slug: string;
  thumbnail: string;
};

export const categoryListState = atom<Categorytype[]>({
  key: "categoryList",
  default: [],
});

export const selectedCategoryState = atom<Categorytype | undefined>({
  key: "selectedCategory",
  default: undefined,
});

export const shouldFetchCategoryListSelector = selector({
  key: "shouldFetchCategoryList",
  get: ({ get }) => {
    const categoryList = get(categoryListState);
    return categoryList.length === 0;
  },
});
