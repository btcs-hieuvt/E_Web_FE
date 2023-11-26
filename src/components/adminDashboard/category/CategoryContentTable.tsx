import useCategoryApi from "@/hooks/useCategoryApi";
import { Button, Modal, Popconfirm, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import Image from "next/image";
import React, { useState } from "react";
import CategoryForm from "./CategoryForm";

interface DataTabelType {
  STT: number;
  id: string;
  name: string;
  thumbnail: string;
}

const CategoryContentTable = () => {
  const { categoryList, deleteCategory } = useCategoryApi();
  const [isEdit, setIsEdit] = useState(false);

  const [itemEdit, setItemEdit] = useState<DataTabelType | undefined>();

  //   console.log("item được edit", itemEdit);

  const handleCreateNew = () => {
    setIsEdit(true);
  };

  const handleCloseModel = () => {
    setIsEdit(false);
    setItemEdit(undefined);
  };

  const dataTable: DataTabelType[] = categoryList?.map((i, index) => ({
    STT: Number(index) + 1,
    id: i._id,
    name: i.name,
    thumbnail: i.thumbnail,
  }));

  const columns: ColumnsType<DataTabelType> = [
    {
      title: "STT",
      key: "STT",
      dataIndex: "STT",
      width: 100,
      render: (_, { STT }) => <a>{STT.toString().padStart(2, "0")}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, { name }) => <a>{name}</a>,
    },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (_, { thumbnail }) => (
        <div className="flex items-center justify-center object-cover ">
          <Image
            alt="thumbnail"
            className="object-cover"
            src={thumbnail}
            width={80}
            height={80}
          />
        </div>
      ),
    },
    {
      title: "Action",
      key: "action",
      fixed: "right",
      render: (_, item) => (
        <div className="flex items-center space-x-[8px]">
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
            onConfirm={() => deleteCategory(item.id)}
          >
            <Button className="border-red-600 text-red-600 bg-white">
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="mt-6">
        <Table
          columns={columns}
          scroll={{ x: 500 }}
          pagination={{ position: ["bottomCenter"] }}
          dataSource={dataTable ?? []}
        />
      </div>
      <Modal
        title="Update Category"
        open={isEdit}
        onCancel={handleCloseModel}
        footer={null}
      >
        <CategoryForm
          handleCloseModel={handleCloseModel}
          isEdit
          itemEdit={itemEdit}
        />
      </Modal>
    </>
  );
};

export default CategoryContentTable;
