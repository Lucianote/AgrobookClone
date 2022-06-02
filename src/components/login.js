import React, {useState} from "react";
import { ReactDOM } from "react";
import "./styles.css";
import { Navigate } from 'react-router-dom'
function Login (){
const [errorMessages, setErrorMessages] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);

//Informacion de  nuestros usuarios
 const basedatos = [
     {
         username: "test01",
         clave: "1234"
     },
     {
         username: "test02",
         clave: "1234"
     }
 ];

 const errors = {
     uname: "Error con el nombre de usuario",
     pass: "Su contraseña es incorrecta"
 }

 const handleSubmit = (event) => {
     //prevenimos que la pagina se recargue
     event.preventDefault();

     let { uname, pass } = document.forms[0];

     //Buscamos el nombre de usuario
     const userData = basedatos.find((user) => user.username === uname.value);

     //Comparamos resultados
     if(userData) {
         if(userData.clave !== pass.value) {
             //Contraseña invalida
             setErrorMessages({ name: "pass", message: errors.pass});
         } else {
             setIsSubmitted(true);
         }
     } else {
         // Usuario no encontrado
         setErrorMessages({name: "uname" , message: errors.uname});
     }
 };

 const renderErrorMessage = (name) =>
 name === errorMessages.name && (
     <div className="error">{errorMessages.message}</div>
 );



 const renderForm = (
     <div className="form">
         <form onSubmit={handleSubmit}>
             <div className="input-container">
                 <label className="lbl1">Usuario</label>
                 <input type="text" name="uname" required />
                 {renderErrorMessage("uname")}
             </div>
             <div className="input-container">
                 <label className="lbl2">Contraseña</label>
                 <input type="password" name="pass" required/>
                 {renderErrorMessage("pass")}
             </div>
             <div className="button-container">
                 <input type="submit" />
             </div>
         </form>
     </div>
 );
 return(
     
    <>

 <div className="login-form">
     <div className="title">Bienvenidos al</div>
     <i className="header">Agrobook</i>
     {isSubmitted ? <Navigate to="/Menu"/>: renderForm}
 </div>
 </>
 )
}

 export default Login;