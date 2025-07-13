function Habits() {
  return (
    <>
      <div className="flex justify-center items-center gap-14 w-full">
        <div className="flex-1 bg-[#212121] rounded-lg text-[#00DD90] border-[#00DD90] border-1 p-6">
        <div className="flex text-center w-full py-4 justify-center">
            <b className="text-2xl">Buenos hábitos</b>
        </div>
        <ul className="list-disc space-y-4">
          <li>Usa 12 caracteres o más.</li>
          <li>Combina mayúsculas, minúsculas, números y símbolos.</li>
          <li>Usa una contraseña única para cada sitio.</li>
          <li>Usa frases aleatorias o generadores de contraseñas.</li>
          <li>Guarda tus contraseñas en un gestor seguro.</li>
        </ul>
      </div>
      <div className="flex-1 bg-[#212121] rounded-lg text-[#00774D] border-[#00774D] border-1 p-6">
        <div className="text-center w-full py-4">
            <b className="text-2xl">Malos hábitos</b>
        </div>
        <ul className="list-disc space-y-4">
          <li>Usar contraseñas cortas o muy simples.</li>
          <li>Incluir datos personales como tu nombre, cumpleaños o teléfono.</li>
          <li>Reutilizar la misma contraseña en varios sitios.</li>
          <li>Usar palabras comunes como contraseña123 o admin.</li>
          <li>Anotar contraseñas en papel o dejarlas visibles en tu PC.</li>
        </ul>
      </div>
      </div>
    </>
  );
}

export default Habits;