import "./App.css";
import "./components/login";
import Vista1 from"./screens/vista1";
import { Link, Outlet } from "react-router-dom";


export default function App() {
  return (
    <div className="Appheader">
      <h1>Bienvenidos!</h1>
      <nav
      // style={{
      //   borderBottom: "solid 1px",
      //   paddinBottom: "1rem",
      // }}
      >
        <Link className="lnkA" to="Home">Quienes Somos</Link> |{" "}
        <Link className="lnkA" to="Login">Inicio Sesion</Link>
      </nav>
      <Outlet />
      
    </div>
  );
}
