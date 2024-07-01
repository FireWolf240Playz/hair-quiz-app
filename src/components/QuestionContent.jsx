/* eslint-disable react/prop-types */
import OptionButton from "./OptionButton";
import ProgressBar from "./ProgressBar";
import { questions } from "../data/questions";

const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

function QuestionContent({ question, questionIndex, handleNext }) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mb-7 w-full max-1000:flex-col-reverse ">
        <h1 className="merriweather-light text-5xl text-center mr-4 max-1000:text-lg max-1000:mr-0">
          {question.question}
        </h1>
        <ProgressBar
          currentQuestion={questionIndex + 1}
          totalQuestions={questions.length}
        />
      </div>
      <div
        className={`flex justify-center items-center flex-wrap gap-4 w-full ${
          question.options.length > 4 ? "max-600:flex-col" : ""
        }`}
      >
        {question.options.map((option, index) => (
          <OptionButton
            key={index}
            option={option.text}
            letter={letters[index]}
            onClick={() => handleNext(option)}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionContent;
