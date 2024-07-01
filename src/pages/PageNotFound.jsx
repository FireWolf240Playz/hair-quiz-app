import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-5">
      Ooops! This page doesn&apos;t exist. :(
      <Link
        to="/home"
        className="bg-colorMain text-black merriweather-light py-2 px-4 rounded"
      >
        Go back
      </Link>
    </div>
  );
}

export default PageNotFound;
