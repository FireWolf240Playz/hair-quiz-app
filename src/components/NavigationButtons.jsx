import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function NavigationButtons({
  handlePrevious,
  handleNext,
  isFirstQuestion,
  isLastQuestion,
}) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (isFirstQuestion) {
      navigate("/home"); // Navigate to home page if it's the first question
    } else {
      handlePrevious();
    }
  };
  return (
    <div className="flex gap-3 justify-center items-center mt-5">
      <button
        className="border-b-2 text-gray-600 hover:text-black transition-all hover:border-b-black duration-300"
        onClick={handleBackClick}
      >
        Back
      </button>
      <button
        className="bg-colorMain rounded-md py-3 px-7 hover:bg-darkerBlue transition-all duration-300"
        onClick={handleNext}
      >
        {isLastQuestion ? "Discover your result" : "Next question"} &rarr;
      </button>
    </div>
  );
}

export default NavigationButtons;
