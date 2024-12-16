import React, { useState } from "react";
import { Upload, Avatar, Image } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { ReactComponent as UserIcon } from "../../../assets/icon/user-image.svg";
import { ReactComponent as PenIcon } from "../../../assets/icon/pen-icon.svg";
import { UploadWrapper } from "./CustomUpload.styled";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const CustomUpload = () => {
  const [imageUrl, setImageUrl] = useState();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = async (info) => {
    const file = info.file.originFileObj || info.file;
    if (file) {
      const url = await getBase64(file);
      setImageUrl(url); // Set the base64 URL to the imageUrl state
    }
  };

  return (
    <UploadWrapper>
      <Avatar
        size={90}
        src={imageUrl || <UserIcon width={90} height={90} />}
        className="avatar"
        style={{
          backgroundColor: "#f5f5f5",
        }}
      />

      <div className="pen-section">
        <Upload
          showUploadList={false}
          beforeUpload={() => false}
          onChange={handleChange}
          onPreview={handlePreview}
        >
          <PenIcon />
        </Upload>
      </div>
      {previewImage && (
        <Image
          wrapperStyle={{
            display: "none",
          }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </UploadWrapper>
  );
};

export default CustomUpload;
