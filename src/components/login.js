function Login () {
    return(
        <div className="back-container">
            <h1> Iniciar Sesión </h1>
            <form>

                <label>Usuario </label> <input/> <br/><br/>
                <label>Contraseña </label> <input/> <br/><br/>

                <button>Ingresar </button>

            </form>
        </div>
    )
}

export default Login