/* eslint-disable react/prop-types */
function OptionButton({ option, letter, onClick }) {
  return (
    <button
      className="border-2 border-colorMain py-2 px-4 rounded-md"
      onClick={onClick}
    >
      {letter}. {option}
    </button>
  );
}

export default OptionButton;
