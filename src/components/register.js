import React from "react";
import { Link } from "react-router-dom";
function Register () {
    return(
        <div className="back-container">
            <h1> Registros </h1>
            <form>
                <Link to="/register_user"><button>Registrar Nuevos Usuarios</button></Link><br /><br />
                <Link to="/register_time"><button>Registrar Tiempos</button></Link><br /><br />
                <Link to="/register_act"><button>Registrar Actividades</button></Link><br /><br />
 
            </form>
        </div>
    )
}

export {Register}