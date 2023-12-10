import { categoryListState } from "@/atom/categoryAtom";
import { LimitPerPage } from "@/constants/common";
import useProductApi from "@/hooks/useProductApi";
import { ProductDetailType } from "@/types/product";
import { Modal, Popconfirm, Select, Table } from "antd";
import { Button } from "antd/es/radio";
import { ColumnsType } from "antd/es/table";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import ProductForm from "./ProductForm";

const ProductContentTable = () => {
  const {
    getAllProduct,
    listProduct,
    getListProductByCategory,
    deleteProduct,
  } = useProductApi();
  const listCategory = useRecoilValue(categoryListState);
  const [page, setPage] = useState(1);
  const [isEdit, setIsEdit] = useState(false);
  const [itemEdit, setItemEdit] = useState<ProductDetailType | undefined>();
  const categoryOptions = useMemo(() => {
    const options = listCategory.map((i) => ({
      value: i.slug,
      label: i.name,
    }));

    return [
      {
        value: "all",
        label: "All",
      },
      ...options,
    ];
  }, [listCategory]);

  const totalPage = useMemo(() => {
    const total = listProduct?.totalPage;
    return total;
  }, [listProduct]);

  const [categorySelected, setCategorySelected] = useState(
    categoryOptions[0].value
  );

  useEffect(() => {
    const getProducts = async () => {
      try {
        if (categorySelected === "all") {
          await getAllProduct(page, LimitPerPage);
        } else {
          await getListProductByCategory(categorySelected, page, LimitPerPage);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [categorySelected, page]);

  // table data
  const columns: ColumnsType<ProductDetailType> = [
    {
      title: "STT",
      width: 70,
      dataIndex: "stt",
      key: "stt",
      render: (_, {}, index) => (
        <div className="text-center">
          {(index + 1).toString().padStart(2, "0")}
        </div>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, { name }) => <a>{name}</a>,
    },
    {
      title: "Thumnail",
      dataIndex: "images",
      key: "images",
      render: (_, { images }) => (
        <div className="w-full aspect-square object-cover">
          <Image
            alt="thumbnail"
            src={images[0]}
            width={120}
            height={120}
            className="w-full h-full object-cover"
          />
        </div>
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (_, { category }) => <a>{category?.name}</a>,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      width: 100,
      key: "quantity",
      render: (_, { quantity }) => <a>{quantity}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (_, { price }) => (
        <a>
          {price
            .toLocaleString("vi-VN", { style: "currency", currency: "VND" })
            .replace("₫", "đ")}
        </a>
      ),
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      width: 220,
      render: (_, item) => (
        <div className="flex items-center justify-center space-x-[8px]">
          <Button
            className="border-sky-600 text-sky-600 bg-white"
            onClick={() => {
              setItemEdit(item);
              handleCreateNew();
            }}
          >
            Edit
          </Button>

          <Popconfirm
            title="Sure to delete?"
            okButtonProps={{ className: "bg-sky-600 text-white" }}
            onConfirm={() => deleteProduct(item._id)}
          >
            <Button className="border-red-600 text-red-600 bg-white">
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  const handleCreateNew = () => {
    setIsEdit(true);
  };

  const handleCloseModel = () => {
    setIsEdit(false);
    setItemEdit(undefined);
  };

  return (
    <div className="mt-4 flex flex-col space-y-[12px]">
      <Select
        size={"large"}
        className="!w-[200px]"
        onChange={(e) => setCategorySelected(e)}
        placeholder="Select Category"
        defaultValue={categoryOptions[0].value}
        options={categoryOptions ?? []}
      />
      <div>
        <Table
          columns={columns}
          scroll={{ x: 300 }}
          pagination={
            totalPage > 1 ? { position: ["bottomCenter"] } : undefined
          }
          dataSource={listProduct?.data ?? []}
        />
      </div>
      <Modal
        title="Update Category"
        open={isEdit}
        onCancel={handleCloseModel}
        footer={null}
      >
        <ProductForm
          handleCloseModel={handleCloseModel}
          isEdit
          itemEdit={itemEdit}
        />
      </Modal>
    </div>
  );
};

export default ProductContentTable;
