import CustomUploadImage from "@/components/CustomUploadImage";
import useCategoryApi from "@/hooks/useCategoryApi";
import { CategoryType } from "@/types/category";
import { Button, Form, Input, message } from "antd";
import React, { useEffect, useMemo, useState } from "react";

interface Props {
  handleCloseModel?: () => void;
  isEdit?: boolean;
  itemEdit?:
    | {
        STT: number;
        id: string;
        name: string;
        thumbnail: string;
      }
    | undefined;
}
const CategoryForm = (props: Props) => {
  const { isEdit = false, itemEdit = undefined, handleCloseModel } = props;
  const [form] = Form.useForm();
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { addCategory, updateCategory } = useCategoryApi();

  useEffect(() => {
    if (itemEdit) {
      form.setFieldValue("name", itemEdit.name);

      const img = itemEdit?.thumbnail ? [itemEdit?.thumbnail] : [];
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
    <div>
      {contextHolder}
      <Form
        form={form}
        autoComplete="off"
        layout="vertical"
        onFinish={async (v) => {
          if (images) {
            setLoading(true);
            const body: CategoryType = {
              name: v.name,
              thumbnail: images[0],
            };
            const response =
              isEdit && itemEdit?.id
                ? await updateCategory(itemEdit?.id as string, body)
                : await addCategory(body);
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
      >
        <Form.Item
          name="name"
          label={<div>Name</div>}
          rules={[{ required: true }]}
        >
          <Input placeholder="Enter name category" className="h-[40px]" />
        </Form.Item>

        <Form.Item name="thumbnail" label={<div>Thumbnail</div>}>
          <CustomUploadImage
            type="single"
            setImages={setImages}
            images={images}
          />
        </Form.Item>
      </Form>
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
    </div>
  );
};

export default CategoryForm;
