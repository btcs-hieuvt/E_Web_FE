import React, { useEffect, useMemo, useState } from "react";

interface Props {
  images: string[];
}
const ShowProduct = ({ images }: Props) => {
  const newImages = useMemo(() => {
    const data = images.map((item, index) => ({
      image: item,
      key: index,
    }));
    return data;
  }, [images]);

  const [activeImage, setActiveImage] = useState<number>(0);

  const ImageActived = useMemo(() => {
    const image = newImages.find((item) => item.key === activeImage)?.image;

    return image;
  }, [newImages, activeImage]);

  const handleSeeDetailImage = (key: number) => {
    setActiveImage(key);
  };
  return (
    <div className="px-10 pt-6 pb-4 w-full h-full">
      <div className="grid grid-cols-4 h-full">
        <div className="col-span-1 h-full flex flex-col justify-center">
          <div className="flex flex-col justify-center space-y-[12px]">
            {newImages.map((item, index) => (
              <div
                className={`bg-mini-image border ${
                  activeImage === item.key
                    ? "border-sky-300"
                    : "border-[#161e2e]"
                }  hover:border-[#ffffffa1] w-[100px] h-[100px] p-1 rounded transition-all ease-in-out duration-300`}
                key={item.key}
              >
                <div
                  onClick={() => handleSeeDetailImage(item.key)}
                  className="w-full h-full object-cover cursor-pointer rounded-md"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-3 flex justify-center items-center">
          <div className="flex-1">
            <div
              className="w-full pt-[100%] object-cover"
              style={{
                backgroundImage: `url(${ImageActived})`,
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
