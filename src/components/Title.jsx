/* eslint-disable react/prop-types */
function Title({ children }) {
  return (
    <h1 className="merriweather-light text-3xl sm:text-6xl font-bold mb-4 leading-relaxed ">
      {children}
    </h1>
  );
}

export default Title;
