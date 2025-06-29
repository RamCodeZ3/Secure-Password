import PasswordInput from "./PasswordInput";

function ProgressBar({progress}) {
  const strokeWidth = 8;
  const radius = 50 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress / 100);
  const textColor = progress === 0 ? "#1D312A" : "#00774D";

  return (
    <>
    <div className="flex relative justify-center items-center bg-[#212121] px-12 py-10 rounded-lg">
      <svg width="160" height="160" viewBox="0 0 100 100">
      <circle
        r={radius}
        cx="50"
        cy="50"
        fill="transparent"
        stroke="#1D312A" // gris claro para fondo (Tailwind gray-200)
        strokeWidth={strokeWidth}
      />
      <circle
        r={radius}
        cx="50"
        cy="50"
        fill="transparent"
        stroke="#00774D"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(-90 50 50)" // para que empiece desde arriba
      />
    </svg>
    <b className={`absolute z-100 text-3xl text-[${textColor}]`}>{Math.round(progress)}%</b>
    </div>
    </>
  );
}

export default ProgressBar;
