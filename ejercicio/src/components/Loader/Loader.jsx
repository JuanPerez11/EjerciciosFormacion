// Diseñar un componente "Loader" que muestre una pantalla de carga por encima del contenido cuando nosotros queramos.
// 1. Revisión de requisitos: props, estados, etc.
// 2. Definición del componente: JSX y CSS (mínimo).
// 3. Implementación del componente.

import "./styles.css";

function Loader({isShown}){

    if (!isShown) return null
    return(
        <div className="backdrop">
            <div className="loader"/>
        </div>
    )
}

export default Loader;

