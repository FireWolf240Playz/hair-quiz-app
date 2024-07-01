import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAnswer } from "../store/quizSlice";
import { questions } from "../data/questions";
import QuestionContent from "../components/QuestionContent";
import NavigationButtons from "../components/NavigationButtons";
import { motion, AnimatePresence } from "framer-motion";

function QuestionPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const questionIndex = questions.findIndex(
    (question) => question.id === parseInt(id, 10)
  );

  if (questionIndex === -1) {
    return <div>Question not found</div>;
  }

  const question = questions[questionIndex];

  const handleNext = (answer) => {
    dispatch(
      addAnswer({
        questionId: question.id,
        category: question.category,
        answer,
      })
    );
    if (questionIndex < questions.length - 1) {
      navigate(`/question/${questions[questionIndex + 1].id}`);
    } else {
      navigate("/results");
    }
  };

  const handlePrevious = () => {
    if (questionIndex > 0) {
      navigate(`/question/${questions[questionIndex - 1].id}`);
    } else {
      navigate("/home");
    }
  };

  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen p-4">
      <AnimatePresence>
        <div className="relative w-full flex flex-col items-center justify-center overflow-hidden  max-800:h-[600px] ">
          <motion.div
            key={questionIndex}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="w-full "
          >
            <QuestionContent
              question={question}
              questionIndex={questionIndex}
              handleNext={handleNext}
            />
          </motion.div>
        </div>
      </AnimatePresence>
      <NavigationButtons
        handlePrevious={handlePrevious}
        handleNext={() => handleNext()}
        isFirstQuestion={questionIndex === 0}
        isLastQuestion={questionIndex === questions.length - 1}
      />
    </div>
  );
}

export default QuestionPage;
