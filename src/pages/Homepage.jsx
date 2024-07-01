import Header from "../components/Header";
import { motion } from "framer-motion";

function Homepage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative flex flex-col w-screen h-screen"
    >
      <div className="relative w-full h-screen filter">
        <img
          src="/quiz-image.jpg"
          className="w-full h-full object-cover"
          alt="Quiz"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Header
            textTitle="Build you everyday self care routine."
            text="Perfect for if you're looking for soft, nourished skin, our moisturizing body washes are made with skin-natural nutrients that work with your skin to replenish moisture. With a light formula, the bubbly lather leaves your skin feeling cleansed and cared for. And by choosing relaxing fragrances you can add a moment of calm to the end of your day."
            buttonText="Retake the quiz"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Homepage;
