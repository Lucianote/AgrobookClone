import React from "react";

import "../screens/svista.css";
import { Link } from "react-router-dom";
import Tabla from "../components/Tabla";

const tbodyData = [
  { id: '1', items:['Plaguicidas','Plaguicida','15000','260','Comprado en el mes de mayo' ]},
  { id: '2', items:['Plaguicidas','Plaguicida', '15000','260','Compra proxima temporada' ]},
  { id: '3', items:['Semillas','Semillas Alfalfa','12000','197','Semillas de alfalfa' ]},
  { id: '4', items:['Semillas','Semillas Maiz','14000','89','Semillas de  maiz' ]},
  { id: '5', items:['Abono','Abono','16000','70','Abono comprado 1 de junio' ]},
  { id: '6', items:['Fertilizante','Fertilizante granular','15000','25','Fertilizante de origen natural' ]},
  { id: '7', items:['Herbicida','Herbicida BASF','53000','4','Comprado en el mes de mayo' ]},
  { id: '8', items:['Fungicida','Fungicida quimetal','125000','25','Comprado en el mes de mayo' ]},
  { id: '9', items:['Filtro','Filtro Pesticidas','72000','26','Comprado en el mes de mayo' ]},
  { id: '10', items:['Bio-Estimulantes','Stoller rezist poda 20 L','15300','8', ' ' ]},
]
const theadData = ['Nombre','Descripcion','Precio Unitario','Stock','Comentarios']

export default function Vista2(){

  return (
    <>
    <h2 className="header">Inventario</h2>
      <div>
        <Tabla theadData={theadData} tbodyData={tbodyData}/>
      </div>

      <div className='divS'>
      <Link className="lnkS" to="/Menu">Salir</Link>
      </div>

    </>


  )
}