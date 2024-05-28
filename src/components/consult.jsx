import React from "react";
import { Link } from "react-router-dom";
function Consult () {
    return(
        <div className="back-container">
        <h1> Consultas </h1>
        <form>
            <Link to="/consult_user"><button>Consultar Usuarios</button></Link><br /><br />
            <Link to="/consult_time"><button>Consultar Tiempos Registrados</button></Link><br /><br />
            <Link to="/consult_act"><button>Consultar Actividades Registradas</button></Link><br /><br />

        </form>
    </div>
    )
}

export default Consult