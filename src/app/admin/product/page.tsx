"use client";

import ProductContentTable from "@/components/adminDashboard/productAdmin/ProductContentTable";
import ProductForm from "@/components/adminDashboard/productAdmin/ProductForm";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { IoAddCircle } from "react-icons/io5";

const ProductPage = () => {
  const [showFormProduct, setShowFormProduct] = useState<boolean>(false);
  //handle form Product
  const handleCreateNew = () => {
    setShowFormProduct(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModel = () => {
    setShowFormProduct(false);
    document.body.style.overflow = "auto";
  };
  return (
    <div>
      <div className="text-2xl leading-6 font-semibold mb-4">
        Manage Products
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
        <div>
          <ProductContentTable />
        </div>
      </div>
      <Modal
        title="Create Product"
        open={showFormProduct}
        onCancel={handleCloseModel}
        className="[&_.ant-modal-content]:pr-4"
        footer={null}
      >
        <ProductForm handleCloseModel={handleCloseModel} />
      </Modal>
    </div>
  );
};

export default ProductPage;
