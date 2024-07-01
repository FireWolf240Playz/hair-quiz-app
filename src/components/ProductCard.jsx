import { Suspense } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

/* eslint-disable react/prop-types */
function ProductCard({ imageUrl, title, price, isWishlisted, toggleWishlist }) {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <div className="flex flex-col items-center justify-center w-full max-w-xs h-[420px]">
        <div className="flex-grow h-4/5 w-full mb-4 border-1 rounded-lg bg-white cursor-pointer relative">
          <div className="absolute right-3 top-2">
            {isWishlisted ? (
              <FaHeart
                className="text-red-500"
                onClick={toggleWishlist}
                size={24}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <FaRegHeart
                className="text-gray-500"
                onClick={toggleWishlist}
                size={24}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
          <img
            src={imageUrl}
            alt="Product's photo"
            className="w-full h-full object-contain max-h-[300px]"
          />
        </div>
        <p className="text-center text-md text-[##1C2635]">{title}</p>
        <p className="text-center text-[16px] text-[##1C2635] ">${price}</p>
      </div>
    </Suspense>
  );
}

export default ProductCard;
