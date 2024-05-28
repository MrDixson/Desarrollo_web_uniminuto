import React from "react";

function Consult_user() {
    return (
        <div className="back-container">
            <h1>Consulta de Usuarios</h1>
            <div className="table-container"> 
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Cargo</th>
                            <th>Teléfono</th>
                            <th>Correo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Consult_user;
