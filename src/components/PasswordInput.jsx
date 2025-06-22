function PasswordInput() {
  
  function hardleInput(event){
    let score = 0;
    let password = event.target.value
    if (password.length >= 8) score++ // Verifica si hay más o igual de 8 caracteres
    if (password.length >= 12) score++ // Verifica si hay más o igual de 12 caracteres 
    if (/[A-Z]/.test(password)) score++ // Verifica si tiene mayusculas
    if (/[a-z]/.test(password)) score++ // Verifica si tiene minusculas
    if (/[^a-zA-Z0-9]/.test(password)) score++  // Verifica si tiene caracteres especiales
    if (/[0-9]/.test(password)) score++ // Verifica si tiene algun numero 
    console.log(score)
  }
  
  return (
    <>
    <div>
      <h3>Introduce tu contraseña</h3>
      <input 
         type="password" 
         onChange={hardleInput}>
         </input>
    </div>
    </>
  )
  }

export default PasswordInput;