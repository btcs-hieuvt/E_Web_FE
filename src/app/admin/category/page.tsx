"use client";

import React, { useState } from "react";
import { Button, Modal } from "antd";
import { IoAddCircle } from "react-icons/io5";
import CategoryForm from "@/components/adminDashboard/category/CategoryForm";
import CategoryContentTable from "@/components/adminDashboard/category/CategoryContentTable";

const CategoryPage = () => {
  const [showFormCategory, setShowFormCategory] = useState<boolean>(false);
  //handle form category
  const handleCreateNew = () => {
    setShowFormCategory(true);
  };

  const handleCloseModel = () => {
    setShowFormCategory(false);
  };

  //handle table content list category

  return (
    <>
      <div>
        <div className="text-2xl leading-6 font-semibold mb-4">
          Manage Category
        </div>
        <div>
          <Button
            onClick={handleCreateNew}
            icon={<IoAddCircle size={16} />}
            className="flex items-center text-sky-600 text-sm border-sky-600"
            size={"middle"}
          >
            Create
          </Button>
        </div>

        <div>
          <CategoryContentTable />
        </div>
      </div>
      <Modal
        title="Create Category"
        open={showFormCategory}
        onCancel={handleCloseModel}
        footer={null}
      >
        <CategoryForm handleCloseModel={handleCloseModel} />
      </Modal>
    </>
  );
};

export default CategoryPage;
