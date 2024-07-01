/* eslint-disable react/prop-types */
function Dots({ totalDots, currentIndex, setCurrentIndex }) {
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex space-x-2 mt-4 absolute bottom-[-30px]">
      {Array.from({ length: totalDots }).map((_, index) => (
        <div
          key={index}
          onClick={() => handleDotClick(index)}
          className={`w-3 h-3 rounded-full cursor-pointer ${
            index === currentIndex ? "bg-blue-500" : "bg-gray-300"
          }`}
        ></div>
      ))}
    </div>
  );
}

export default Dots;
