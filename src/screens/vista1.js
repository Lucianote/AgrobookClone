import React, { Component } from 'react';
import "../screens/pvista.css";
import { Link } from "react-router-dom";
import Tabla from '../components/Tabla';


  const tbodyData = [
    { id:'1',items:['1','Gourav','Hammad','Santiago','CL','20','DEV',2000]},
    { id:'2',items:['2','Rithik','Verma','Santiago','CL','22','DEV',2000 ]},
    { id:'3',items:['3','Kartik','Malik','Ottawa','CA','30','COM',3000 ]},
    { id:'4',items:['4','Nikhil','Kapoor','Minsk','BL','30','COM',3000 ]},
    { id:'5',items:['5','Ayush','Singh','Washington', 'US' , '45', 'JP',5000 ]},
    { id:'6',items:['6','Juan','Hidalgo','Concepcion','CL','51','JP', 5000 ]},
    { id:'7',items:['7','Mohamed','Vlasizki','New Delhi','IN','23','DEV', 2000 ]},
    { id:'8',items:['8','Ramik','Malik','New Delhi','IN','52','DEV', 2000 ]},
    { id:'9',items:['9','Carlos','Henriquez','Iquique','CL', '22','COM', 3000 ]},
    { id:'10',items:['10','Viktor','Singh','Moscow','RU', '18', 'COM', 3000]},
    { id:'11',items:['11','Nicolas','Ramirez','Santiago','CL', '18', 'DEV', 2000 ]},
    { id:'12',items:['12','Carlos','Palomino','Roma','IT', '18','COM', 3000 ]},
    { id:'13',items:['13','Peter','McNolan','Washington','US', '29','QA', 2000 ]},
    { id:'14',items:['14','Carl','Terrier','Washington','US' , '27', 'QA', 2000 ]},
    { id:'15',items:['15','John','Stevens','Washington','US' , '38', 'DBA', 2500 ]},
    { id:'16',items:['16','Adam','Stevens','Washington','US' , '35', 'DBA', 2500 ]},
    { id:'17',items:['17','Terry','Hoffins','Manchester','EN' , '42', 'JP', 5000 ]},
    { id:'18',items:['18','Juan','Cordero','Concepcion','CL' , '38', 'COM', 3000 ]},
    { id:'19',items:['19','Johnny','Adams','Washington','US' , '37', 'COM', 3000 ]},
    { id:'20',items:['20','John','Anderson','Washington','US' , '38', 'COM', 3000 ]},
    { id:'21',items:['21','Danny','Deans','Manchester','EN' , '34', 'DEV', 3000 ]},
    { id:'22',items:['22','Billy','Laidlaw','Manchester','EN' , '28', 'DEV', 2000 ]},
    { id:'23',items:['23','Liam','Hooper','Manchester','EN' , '38', 'COM', 2000 ]},
    { id:'25', items:['24','Mark','Liams','Washington','US' ,'41','DBA',2500 ]},
    { id:'25', items:['25','Kevin','Thompson','Washington','US' ,'47','DBA',2500 ]},
  ]
  const theadData = ['ID','Nombre','Apellido','Ciudad','Pais','Edad','Area','Salario P/M']

  export default function Vista1(){

    return (
      <>
          <h2 className="header">Personal</h2>
        <div className='Tabla1'>
          <Tabla theadData={theadData} tbodyData={tbodyData}/>
        </div>
  
        <div className='divS'>
        <Link className="lnkS" to="/Menu">Salir</Link>
        </div>
  
      </>
  
  
    )
  }