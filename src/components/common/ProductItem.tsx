import {} from "@/atom/cartAtom";
import useCart from "@/hooks/useCart";
import { ProductDetailType } from "@/types/product";
import { formatPrice } from "@/utils/formatPrice";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { BiSolidCart } from "react-icons/bi";

interface Props {
  data: ProductDetailType;
}
const ProductItem = ({ data }: Props) => {
  const { handleAddToCart, cart, totalItem } = useCart();
  const params = useParams();
  const router = useRouter();

  const handleSeeDetailPage = () => {
    router.push(`/category/${params.slug}/${data.slug}`);
  };

  return (
    <div className="col-1 shadow-lg rounded-md overflow-hidden text-white scale-95 hover:scale-100 transition-all ease-in-out duration-500">
      <div className="p-4 bg-gradient-to-br from-[#042f38] via-[#060e1a] to-[#051022]">
        <div
          onClick={handleSeeDetailPage}
          className="w-full pt-[100%] object-cover cursor-pointer"
          style={{
            backgroundImage: `url(${data.images[0]})`,
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="bg-[#262626] px-4 pt-4 pb-7">
        <div
          className="w-full h-[60px] text-sm font-semibold leading-4 line-clamp-3 tracking-normal cursor-pointer"
          onClick={handleSeeDetailPage}
        >
          {data.name}
        </div>
        <div className="flex flex-col ">
          <span className="text-lg block leading-5 font-bold">
            {data.priceSale > 0
              ? formatPrice(data.priceSale)
              : formatPrice(data.price)}
            đ
          </span>
          <span className="text-sm block mt-1 line-through leading-[18px] text-[#9d9d9d] font-semibold">
            {data.priceSale > 0 ? `${formatPrice(100000)}đ` : null}
          </span>
        </div>

        <div
          className="flex items-center space-x-[6px] mt-5 text-[#ece81a] hover:opacity-80 cursor-pointer"
          onClick={() => handleAddToCart(data)}
        >
          <BiSolidCart className="text-[20px]" />
          <div className="uppercase font-normal text-sm">add to cart</div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
