/* eslint-disable react/prop-types */
function ProgressBar({ currentQuestion, totalQuestions }) {
  const radius = 50; // Radius of the circle
  const stroke = 6; // Stroke width
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const progress = currentQuestion / totalQuestions;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <div className="flex justify-center items-center">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
      >
        <circle
          stroke="#e5e5e5"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#00BFFF"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="absolute flex justify-center items-center">
        <span className="text-xl font-bold">
          {currentQuestion}/{totalQuestions}
        </span>
      </div>
    </div>
  );
}

export default ProgressBar;
