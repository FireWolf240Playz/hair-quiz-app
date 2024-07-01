import useFilteredProducts from "../hooks/useFilteredProducts";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./ProductCard";
import RoutineMessage from "./RoutineMessage";
import Dots from "./Dots";
import { FaChevronRight } from "react-icons/fa";

function Carousel() {
  const filteredProducts = useFilteredProducts();
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  if (!filteredProducts || filteredProducts.length === 0) {
    return <div>Loading...</div>; // Add a loading state
  }

  const handleWishlistToggle = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(productId)
        ? prevWishlist.filter((id) => id !== productId)
        : [...prevWishlist, productId]
    );
  };

  const totalSlices = Math.ceil(filteredProducts.length / 2);
  const totalDots = Math.min(totalSlices, 3); // Adjust if you want a maximum of 3 dots

  const handleClick = function () {
    setCurrentIndex((curIndex) => (curIndex + 1) % totalSlices);
  };

  const slideVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  const sortedProducts = [
    ...filteredProducts.filter((product) => wishlist.includes(product.id)),
    ...filteredProducts.filter((product) => !wishlist.includes(product.id)),
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative flex gap-5 items-center justify-center max-800:flex-col">
        <AnimatePresence initial={false}>
          <RoutineMessage />
          <div className="relative flex gap-5 items-center justify-center overflow-hidden ">
            <motion.div
              key={currentIndex}
              className="flex gap-5 items-center justify-center"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {sortedProducts
                .slice(currentIndex * 2, currentIndex * 2 + 2)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    title={product.title}
                    imageUrl={product.images[0]?.src}
                    price={product.variants[0]?.price}
                    isWishlisted={wishlist.includes(product.id)}
                    toggleWishlist={() => handleWishlistToggle(product.id)}
                  />
                ))}
            </motion.div>
          </div>
        </AnimatePresence>
        <button
          className="w-[60px] h-[60px] bg-colorMain rounded-full flex justify-center items-center cursor-pointer"
          onClick={handleClick}
        >
          <FaChevronRight />
        </button>
      </div>
      <Dots
        totalDots={totalDots}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
}

export default Carousel;
