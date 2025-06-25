import PasswordInput from "./PasswordInput";

const ProgressBar = ({ percentage }) => {
  const strokeWidth = 8; // Ancho del borde de la barra de progreso
  const radius = 50 - strokeWidth / 2; // Radio del círculo menos la mitad del ancho del borde
  const circumference = 2 * Math.PI * radius; // Circunferencia del círculo

  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg className="w-16 h-16">
      <circle
        className="text-blue-500 stroke-current"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="transparent"
        r={radius}
        cx="50"
        cy="50"
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: offset,
        }}
      />
    </svg>
  );
};

export default ProgressBar;
