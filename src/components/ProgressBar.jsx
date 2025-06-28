import PasswordInput from "./PasswordInput";

function ProgressBar({progress}) {
  const strokeWidth = 8;
  const radius = 50 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress / 100);

  return (
    <>
    <div className="flex justify-center items-center bg-[#212121] px-12 rounded-lg">
      <svg width="100" height="100" viewBox="0 0 100 100">
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
        stroke="#00774D" // azul (Tailwind blue-500)
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(-90 50 50)" // para que empiece desde arriba
      />
    </svg>
    </div>
    </>
  );
}

export default ProgressBar;
