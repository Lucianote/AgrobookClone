import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './components/home';
import Login from './components/login';
import Menu from './components/menu';
import Vista1 from '../src/screens/vista1';
import Vista2 from './screens/vista2';
import Vista3 from './screens/vista3';
import Tabla from './components/Tabla';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';


const data = [
  { id: '1', insumo:'Plaguicidas', descripcion:'Plaguicida', precio: '15000',stock: '260', comentarios: 'Comprado en el mes de mayo' },
  { id: '2', insumo:'Plaguicidas', descripcion:'Plaguicida', precio: '15000',stock: '260', comentarios: 'Compra proxima temporada' },
  { id: '3', insumo:'Semillas', descripcion:'Semillas Alfalfa', precio: '12000',stock: '197', comentarios: 'Semillas de alfalfa' },
  { id: '4', insumo:'Semillas', descripcion:'Semillas Maiz', precio: '14000',stock: '89', comentarios: 'Semillas de  maiz' },
  { id: '5', insumo:'Abono', descripcion:'Abono', precio: '16000',stock: '70', comentarios: 'Abono comprado 1 de junio' },
  { id: '6', insumo:'Fertilizante', descripcion:'Fertilizante granular', precio: '15000',stock: '25', comentarios: 'Fertilizante de origen natural' },
  { id: '7', insumo:'Herbicida', descripcion:'Herbicida BASF', precio: '53000',stock: '4', comentarios: 'Comprado en el mes de mayo' },
  { id: '8', insumo:'Fungicida', descripcion:'Fungicida quimetal', precio: '125000',stock: '25', comentarios: 'Comprado en el mes de mayo' },
  { id: '9', insumo:'Filtro', descripcion:'Filtro Pesticidas', precio: '72000',stock: '26', comentarios: 'Comprado en el mes de mayo' },
  { id: '10', insumo:'Bio-Estimulantes', descripcion:'Stoller rezist poda 20 L', precio: '15300',stock: '8', comentarios: ' ' },
]
const datah = [{serie:'Serie',nombre:'Nombre',descripcion:'Descripcion',precio:'Precio Unitario',stock:'Stock',comentarios:'Comentarios'}]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <switch>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/Login" element={<Login />} />
    <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p className='txtNF'>Pagina no encontrada!</p>
          <br/>
          <div className='imgNF'>
          <h4>El contenido que estabas buscando ya no esta disponible , Disculpe las molestias</h4>
          <img src='https://image.shutterstock.com/image-vector/concept-404-error-page-file-260nw-1115879936.jpg'/>
          </div>
          
        </main>
      }
    />
    <Route path="/Menu" element={<Menu/>}/>
    <Route path="/Menu/Vista1" element={<Vista1/>}/>
    <Route path="/Menu/Vista2" element={<Vista2/>}/>
    <Route path="/Vista3" element={<Vista3 />}/>
  </Routes>
  </BrowserRouter>
  </switch>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
