import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from "antd/es/upload";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { UploadImage } from "@/api/uploadApi";

interface Props {
  type?: "multiple" | "single";
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  images?: string[];
}

const CustomUploadImage = (props: Props) => {
  const { type = "single", setImages, images } = props;
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string[]>(images ?? []);

  useEffect(() => {
    if (images) {
      setImageUrl(images);
    }
  }, [images]);

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange: UploadProps["onChange"] = async (
    info: UploadChangeParam<UploadFile>
  ) => {
    const fileList = info.fileList;
    if (fileList.length > 0) {
      const formData = new FormData();

      fileList.forEach((file) => {
        formData.append("files", file.originFileObj as any);
      });

      const urls = await UploadImage(formData);
      setImageUrl(urls.result);
      setImages(urls.result);
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  if (type === "multiple") {
    return (
      <div>
        <Upload
          maxCount={5}
          action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
          listType="picture-card"
          onChange={handleChange}
          beforeUpload={beforeUpload}
        >
          {imageUrl.length < 5 && "+ Upload"}
        </Upload>
      </div>
    );
  }
  return (
    <div>
      <Upload
        maxCount={1}
        name="image"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl.length > 0 ? (
          <Image src={imageUrl[0]} alt="avatar" width={200} height={200} />
        ) : (
          uploadButton
        )}
      </Upload>
    </div>
  );
};

export default CustomUploadImage;
