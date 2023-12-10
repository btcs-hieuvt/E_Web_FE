import { categoryListState } from "@/atom/categoryAtom";
import CustomUploadImage from "@/components/CustomUploadImage";
import useProductApi from "@/hooks/useProductApi";
import { ProductDetailType, ProductPost } from "@/types/product";
import { Button, Form, Input, InputNumber, Select, message } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";

interface ProductPayload {
  name: string;
  description: string;
  subDescription?: string;
  price: number;
  priceSale: number;
  category: string;
  quantity: number;
}

interface Props {
  handleCloseModel?: () => void;
  isEdit?: boolean;
  itemEdit?: ProductDetailType | undefined;
}

const ProductForm = (props: Props) => {
  const { isEdit = false, itemEdit = undefined, handleCloseModel } = props;
  const [form] = Form.useForm();
  const { addProduct, updateProduct } = useProductApi();
  const [images, setImages] = useState<string[]>([]);
  const listCategory = useRecoilValue(categoryListState);
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const categoryOptions = useMemo(() => {
    const options = listCategory.map((i) => ({
      value: i._id,
      label: i.name,
    }));

    return options;
  }, [listCategory]);

  useEffect(() => {
    if (itemEdit) {
      form.setFieldsValue({
        name: itemEdit.name,
        description: itemEdit.description,
        subDescription: itemEdit.subDescription,
        price: itemEdit.price,
        priceSale: itemEdit.priceSale,
        category: itemEdit.category._id,
        quantity: itemEdit.quantity,
      });

      const img = itemEdit?.images ?? [];
      setImages(img);
    }
  }, [itemEdit]);

  const closeForm = () => {
    form.resetFields();
    if (handleCloseModel) {
      handleCloseModel();
    }
  };
  return (
    <div className="h-[65vh] pr-2 overflow-y-auto">
      {contextHolder}
      <Form
        form={form}
        name="createProductForm"
        onFinish={async (e: ProductPayload) => {
          if (images) {
            setLoading(true);
            const body: ProductPost = {
              name: e.name,
              description: e.description,
              subDescription: e.subDescription ?? "",
              category: e.category,
              images: images,
              price: e.price,
              priceSale: e.priceSale ?? 0,
              quantity: e.quantity,
            };

            const response =
              isEdit && itemEdit?._id
                ? await updateProduct(itemEdit?._id, body)
                : await addProduct(body);
            if (response) {
              messageApi.open({
                type: "success",
                content: isEdit
                  ? "Edited category successfully!"
                  : "Create category successfully!",
              });
              setLoading(false);
              if (isEdit) {
                closeForm();
              }
              form.resetFields();
              setImages([]);
            } else {
              messageApi.open({
                type: "error",
                content: "Create category fail!",
              });
              setLoading(false);
            }
          }
        }}
        layout="vertical"
        className="space-y-4 [&_.ant-input-number-input]:h-[40px]"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter the product name" }]}
        >
          <Input className="w-full h-[40px]" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            { required: true, message: "Please enter the product description" },
          ]}
        >
          <Input.TextArea
            className="w-full !h-[150px]"
            style={{ resize: "none" }}
          />
        </Form.Item>
        <Form.Item name="subDescription" label="Sub Description">
          <Input.TextArea
            className="w-full !h-[120px]"
            style={{ resize: "none" }}
          />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[
            { required: true, message: "Please enter the product price" },
          ]}
        >
          <InputNumber min={0} className="w-full h-[40px]" />
        </Form.Item>
        <Form.Item name="priceSale" label="Sale Price">
          <InputNumber min={0} className="w-full h-[40px]" />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[
            { required: true, message: "Please enter the product category" },
          ]}
        >
          <Select
            size={"large"}
            className="w-full"
            placeholder="Select Category"
            options={categoryOptions ?? []}
          />
        </Form.Item>
        <Form.Item
          name="quantity"
          label="Quantity"
          rules={[
            { required: true, message: "Please enter the product quantity" },
          ]}
        >
          <InputNumber min={0} className="w-full h-[40px]" />
        </Form.Item>
        <Form.Item name="images" label="Images">
          <CustomUploadImage
            type="multiple"
            setImages={setImages}
            images={images}
          />
        </Form.Item>
        <div className="flex justify-end items-center space-x-[8px]">
          <Button onClick={closeForm}>cancel</Button>
          <Button
            className="bg-sky-600 text-white"
            onClick={() => form.submit()}
            loading={loading}
            disabled={images.length < 1}
          >
            {isEdit ? "Edit" : "Create"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ProductForm;
