import React from 'react';
import ReactDOM from 'react-dom/client';
import BotaoLegal from './BotaoLegal';
import Titulo from './Titulo';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Inicio from './pages/Inicio';
import SobreNos from './pages/SobreNos';
import Contato from './Contato';
import Localizacao from './pages/Localizacao';
import NossosClientes from './pages/NossosClientes';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
   {
      path:'/',
      element:<Inicio/>
   }, 
   {
      path:'/SobreNos',
      element:<SobreNos/>
   },
   {
      path:'/Contato',
      element:<Contato/>
   },
   {
      path:'/Localizacao',
      element:<Localizacao/>
   },
   {
      path:'/NossosClientes',
      element:<NossosClientes/>
   },  
])


root.render(

      <RouterProvider router = {router}/>
    /*<div>
      * <BotaoLegal texto="FAZER LOGIN"/> 
      <BotaoLegal texto="ME CADASTRAR"/> 
      <Titulo texto="Seja bem vindo!!"/>
      <Titulo texto="Boa noite!!"/> 

       <Card 
             imagem ="https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=60"
             texto = "Tome esse suco e emagreça!"
       />
       <br></br>
       <Card imagem ="https://img.band.uol.com.br/image/2023/06/23/suco-verde-detox-15325.jpg"
             texto = "Tome esse suco e emagreça!"
      /> *
      <a ref = "">Home</a>
      <a ref = "">Sobre Nós</a>
      <a ref = "">Contato</a>
      <a ref = "">Nossos Clientes</a>
      <a ref = "">Localização</a> 

    </div> */
    
    
);