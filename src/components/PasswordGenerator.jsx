import { useState } from "react";

function PasswordGenerator(){
    const chars = {
        letrasMayus: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        letrasMinus: "abcdefghijklmnopqrstuvwxyz",
        numeros: "0123456789",
        simbolos: "!@#$%^&*()_+[]{}<>?/"
   };

  const [usarNumeros, setUsarNumeros] = useState(true);
  const [usarSimbolos, setUsarSimbolos] = useState(true);
  const [usarMayus, setUsarMayus] = useState(true);
  const [password, setPassword] = useState("");

  const generatorPassword = () => {
    let conjunto = chars.letrasMinus; // minúsculas siempre incluidas

    if (usarNumeros) conjunto += chars.numeros;
    if (usarSimbolos) conjunto += chars.simbolos;
    if (usarMayus) conjunto += chars.letrasMayus;

    if (!conjunto) return setPassword("");

    let nueva = "";
    for (let i = 0; i < 14; i++) {
      const rand = Math.floor(Math.random() * conjunto.length);
      nueva += conjunto[rand];
    }

    setPassword(nueva);

    
  };
  const copyPassword = async () => {
    if (!password) return;
    try {
      await navigator.clipboard.writeText(password);
      alert("¡Contraseña copiada!");
    } catch (err) {
      console.error("Error al copiar", err);
    }
  };
   
    return(
        <>
        <div className="flex flex-col gap-4 justify-center items-center py-6 bg-[#212121] w-full h-2xl rounded-lg text-[#00774D]">
            <b className="text-lg">Generador de contraseña</b>
            <div className="flex gap-2 justify-center items-center w-full">
                <input
                 className=" bg-[#16221E] b-[#00774D] border-1 rounded-md py-1 px-2 W-[90%]"
                 placeholder="Aa$#2354saMf"
                 value={password} 
                 type="text" />
                <button className="bg-[#16221E] b-[#00774D] border-1 py-1.5 px-2 rounded-md"
                onClick={copyPassword}
                >
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-copy"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" /><path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" /></svg>
                </button>
                <button className="bg-[#16221E] b-[#00774D] border-1 py-1.5 px-2 rounded-md"
                onClick={generatorPassword}  
                >
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-refresh"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" /></svg>
                </button>
            </div>
        <div className="flex gap-3 justify-between w-auto">
            <div className="flex gap-2">
                <input
                className="bg-[#16221E] b-[#00774D] border-100"
                type="checkbox"
                onChange={() => setUsarNumeros(!usarNumeros)}
                />
                
                <p>Números</p>
            </div>
            <div className="flex gap-2">
                <input 
                type="checkbox"
                onChange={() => setUsarSimbolos(!usarSimbolos)}
                />
                <p>#$/&@</p>
            </div>
            <div className="flex gap-2">
                <input 
                type="checkbox"
                onChange={() => setUsarMayus(!usarMayus)}
                />
                <p>Mayúsculas</p>
            </div>
        </div>
        </div>
        </>
    )
}

export default PasswordGenerator;