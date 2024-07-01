import { useSelector } from "react-redux";
import useProductData from "../hooks/useProductData";
import { useEffect, useState } from "react";

const useFilteredProducts = () => {
  const { products } = useProductData();
  const answers = useSelector((state) => state.quiz.answers);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const savedAnswers = localStorage.getItem("answers");
    const answersToUse = answers.length
      ? answers
      : savedAnswers
      ? JSON.parse(savedAnswers)
      : [];

    if (products) {
      const categories = answersToUse.map((answer) => answer?.answer?.tag);
      const filtered = products.filter((product) =>
        categories.some((category) => product.tags.includes(category))
      );

      setFilteredProducts(filtered);
    }
  }, [answers, products]);

  return filteredProducts.length ? filteredProducts : [];
};

export default useFilteredProducts;
