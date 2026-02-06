"use client";
import Image from "next/image";
import { useState } from "react";

interface ProductImagesPros {
  imageUrls: string[];
  name: string;
}
const ProductImages = ({ imageUrls, name }: ProductImagesPros) => {
  const [currentProductImage, setCurrentProductImage] = useState(imageUrls[0]);
  const handleImageClick = (imageUrl: string) => {
    setCurrentProductImage(imageUrl);
  };
  return (
    <div className="flex flex-col lg:h-full">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent lg:h-full lg:rounded-lg">
        <Image
          src={currentProductImage}
          alt={name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="mt-8 flex grid-cols-4 gap-4 px-5 lg:px-0">
        {imageUrls.map((imageUrl, index) => (
          <button
            key={index}
            className={`flex h-[100px] items-center justify-center rounded-lg bg-accent lg:h-[100px] lg:w-full ${imageUrl === currentProductImage && "border-2 border-solid border-primary"}`}
            onClick={() => handleImageClick(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
