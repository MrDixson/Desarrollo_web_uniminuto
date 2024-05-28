function Register_user () {
    return(
        <div className="back-container">
            <h1> Registro de usuarios nuevos </h1>
            <form>

                <label>ID del Empleado</label> <input/> <br/><br/>
                <label>Nombre </label> <input/> <br/><br/>
                <label>Apellido </label> <input/> <br/><br/>
                <label>Cargo del Empleado </label> <input/> <br/><br/>
                <label>Teléfono </label> <input/> <br/><br/>
                <label>Correo </label> <input/> <br/><br/>
                <button>Registrar </button>

            </form>
        </div>
    )
}

export {Register_user}