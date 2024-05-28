import React from "react";

class Navegation extends React.Component {
    render(){
        function home_view() {
            window.location = "/"
        }

        function consult_view() {
            window.location = "consult_pag"
        }

        let register_view = () => {
            window.location = "register_pag"
        }

        function log_view() {
            window.location = "login_pag"
        }

        return(
            <div id="block-nav"> 
                <li className="elements-nav">
                    <button className="btn-nav" onClick={home_view}> Home </button>
                </li>
                <li className="elements-nav">
                    <button className="btn-nav" onClick={log_view}> Login </button>
                </li>
                <li className="elements-nav">
                    <button className="btn-nav" onClick={register_view}> Registro </button>
                </li>
                <li className="elements-nav">
                    <button className="btn-nav" onClick={consult_view}> Consulta </button>
                </li>
                
            </div>
        )
    }
}
export default Navegation