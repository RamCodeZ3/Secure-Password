import { useState } from "react";


function PasswordInput() {
  const [score, setScore] = useState(0)
  const [password, setPassword] = useState('')
  const [requirements, setRequirements] = useState({
    Characters_a_z: false,
    Characters_A_Z: false,
    Special_Characters: false,
    num: false,
    Character_lengths_8: false,
    Character_lengths_12: false,
  })

  function handleInput(event){
    const newPassword = event.target.value;
    setPassword(newPassword);

    // Evaluar todos los requisitos
    const newRequirements = {
      Character_lengths_8: newPassword.length >= 8,
      Character_lengths_12: newPassword.length >= 12,
      Characters_A_Z: /[A-Z]/.test(newPassword),
      Characters_a_z: /[a-z]/.test(newPassword),
      num: /[0-9]/.test(newPassword),
      Special_Characters: /[^a-zA-Z0-9]/.test(newPassword),
    };

    // Calcular el nuevo puntaje
    let newScore = 0;
    Object.values(newRequirements).forEach((met) => {
      if (met) newScore += 100 / 6; // Hay 6 requisitos
    });

    // Actualizar los estados
    setRequirements(newRequirements);
    setScore(newScore);
    
    console.log(score)
  }
  
  return (
    <>
    <div>
      <h3>Introduce tu contraseña</h3>
      <input 
         type="password" 
         onChange={handleInput}>
         </input>
    </div>
    </>
  )
  }

export default PasswordInput;