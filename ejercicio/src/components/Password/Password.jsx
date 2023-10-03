import { useState } from "react";

function Password() {
  const [password, setPassword] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  function handleOnChangePassword(event) {
    const val = event.target.value;
    setPassword(val);
  }

  function calcularPuntuacion(val) {
    if (val.length <= 6) {
      return 0;
    } else if (val.length == 7 || val.length == 8 ) {
      return 1;
    } else if (val.length >= 9 && val.length <= 12) {
        return 2;
    } else {
      return 3;
    }
  }

  function calcularPuntuacionExtra(val) {

    if (/[^a-zA-Z\d]/.test(val)) {
        return 2;
      }
    else{
        return 0
      }
}


function calcularCategoria(puntuacion) {
    if (puntuacion >= 0 && puntuacion <= 2) {
      return "Muy débil";
    } else if (puntuacion >= 3 && puntuacion <= 5) {
      return "Débil";
    } else if (puntuacion >= 6 && puntuacion <= 7) {
      return "Moderada";
    } else if (puntuacion >= 8 && puntuacion <= 9) {
      return "Fuerte";
    } else {
      return "Muy fuerte";
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const puntuacionTotal = calcularPuntuacion(password) + calcularPuntuacionExtra(password);
    const categoria = calcularCategoria(puntuacionTotal);
    setScore(puntuacionTotal);
    setShowScore(true);
    alert(`Puntuación de la contraseña: ${puntuacionTotal}\nCategoría: ${categoria}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        name="contraseña"
        value={password}
        onChange={handleOnChangePassword}
      />
      <input type="submit" value="Enviar" />
      {showScore && (
        <p>Puntuación de la contraseña: {score}</p>
      )}
    </form>
  );
}

export default Password;