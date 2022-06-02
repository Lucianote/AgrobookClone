import "./menustyles.css"
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Menu = () => (
    <div className="Menuheader">
      <h1>Bienvenidos a nuestro portal</h1>
      <nav
      >
        <Link className="lnk" to="Vista1">Personal</Link> |{" "}
        <Link className="lnk" to="Vista2">Inventario</Link> |{" "}
        <Link className="lnk" to="/">Cerrar Sesion</Link>
      </nav>
      <Outlet />
    </div>
)

export default Menu;
