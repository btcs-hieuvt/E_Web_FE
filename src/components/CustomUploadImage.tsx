import { Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
  RcFile,
  UploadChangeParam,
  UploadFile,
  UploadProps,
} from "antd/es/upload";
import React, { useEffect, useMemo, useState } from "react";
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

  const [fileList, setFileList] = useState<
    {
      uid: string;
      name: string;
      status: string;
      url: string;
    }[]
  >([]);

  useEffect(() => {
    const newList = imageUrl.map((imageUrl, index) => ({
      uid: index.toString(),
      name: "image",
      status: "done",
      url: imageUrl,
    }));
    setFileList(newList);
  }, [imageUrl]);

  useEffect(() => {
    if (images) {
      setImageUrl(images);
    }
  }, [images]);

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng =
      file.type === "image/jpeg" ||
      file.type === "image/png" ||
      file.type === "image/webp";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG/webp file!");
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
          listType="picture-card"
          fileList={fileList as any}
          showUploadList={{ showPreviewIcon: false, showRemoveIcon: true }}
          beforeUpload={() => false}
          onRemove={(e) => {
            const newFileList = fileList.filter((i) => i.uid !== e.uid);
            setFileList(newFileList);
            const newListUrl = newFileList.map((i) => i.url);
            setImageUrl(newListUrl);
            setImages(newListUrl);
          }}
          onChange={async ({ file }) => {
            const formData = new FormData();
            formData.append("files", file as any);
            const urls = await UploadImage(formData);
            const newUrlList = [...imageUrl, ...urls.result];
            setImageUrl(newUrlList);
            setImages(newUrlList);
          }}
        >
          {imageUrl.length >= 5 ? null : uploadButton}
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
