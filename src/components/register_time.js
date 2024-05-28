function Register_time () {
    return(
        <div className="back-container">
            <h1> Registro de tiempos </h1>
            <form>

                <label>ID Empleado</label> <input/> <br/><br/>
                <label>Tiempo a Registrar (En Horas) </label> <input/> <br/><br/>
                <label>Observaciones </label> <input/> <br/><br/>
                <button>Registrar </button>

            </form>
        </div>
    )
}

export {Register_time}