import { Link } from "react-router-dom";
import { questions } from "../data/questions";

function Header() {
  return (
    <div className="text-center text-white absolute inset-0 flex flex-col items-center justify-center ">
      <h1 className="merriweather-light text-3xl sm:text-6xl font-bold mb-4 leading-relaxed max-800:text-2xl">
        Build a self care routine suitable for you
      </h1>
      <p className="merriweather-light text-lg sm:text-xl mb-6 leading-relaxed ">
        Take our test to get a personalised self care routine <br /> suitable on
        your needs.
      </p>
      <Link
        to={`/question/${questions[0].id}`}
        className="bg-colorMain text-black merriweather-light py-2 px-4 rounded"
      >
        Start the quiz
      </Link>
    </div>
  );
}

export default Header;
