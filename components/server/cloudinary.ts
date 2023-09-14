import { v2 as cloudinary } from "cloudinary";
import React from "react";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_PUBLIC_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export interface IImageUploadMetadata {
  Image: string;
  Public_ID: string;
}

export const UploadAndGetUrl = async ({
  Image,
  Public_ID,
}: IImageUploadMetadata): Promise<string | null> => {
  const response = await cloudinary.uploader.upload(Image, {
    public_id: Public_ID,
    resource_type: "image",
  });
  if (response.secure_url) {
    return response.secure_url;
  }
  return null;
};
