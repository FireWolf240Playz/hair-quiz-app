import Carousel from "../components/Carousel";
import ResultsHeader from "../components/ResultsHeader";
import { motion } from "framer-motion";

function ResultsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative flex flex-col w-screen h-screen">
        <div className="relative w-full h-1/2  ">
          <img
            src="/results-image.jpg"
            className="w-full h-full object-cover"
            alt="Quiz"
          />
          <div className="absolute inset-0 bg-black bg-opacity-55 "></div>
          <div className="absolute inset-1 flex items-center justify-center mb-5 ">
            <ResultsHeader />
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center -mt-20 p-5 w-full max-600:mt-5 max-800:flex-col">
          <div className="flex gap-5 items-start justify-center w-full ">
            <Carousel />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ResultsPage;
