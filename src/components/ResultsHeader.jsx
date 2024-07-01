import { Link } from "react-router-dom";
import { questions } from "../data/questions";

function ResultsHeader() {
  return (
    <div className="text-center text-white absolute inset-0 flex flex-col items-center justify-center">
      <h1 className="merriweather-light text-5xl mb-4 leading-relaxed max-800:text-lg">
        Build your everyday self care routine
      </h1>
      <p className="merriweather-light text-gray-200 text-md mb-6 leading-relaxed max-w-lg max-800:text-[12px] max-800:mb-2">
        Perfect for if you&apos;re looking for soft, nourished skin, our
        moisturizing body washes are made with skin-natural nutrients that work
        with your skin to replenish moisture. With a light formula, the bubbly
        lather leaves your skin feeling cleansed and cared for. And by choosing
        relaxing fragrances you can add a moment of calm to the end of your day.
      </p>
      <Link
        to={`/question/${questions[0].id}`}
        className="bg-transperant text-white border-white border-2 merriweather-light py-2 px-[100px] rounded max-800:px-[50px] max-800:py-1"
      >
        Retake quiz
      </Link>
    </div>
  );
}

export default ResultsHeader;
