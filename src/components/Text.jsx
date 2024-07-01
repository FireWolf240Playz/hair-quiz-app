/* eslint-disable react/prop-types */
function Text({ children }) {
  return (
    <p className="merriweather-light text-lg sm:text-xl mb-6 leading-relaxed">
      {children}
    </p>
  );
}

export default Text;
