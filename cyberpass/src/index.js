import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './paginas/Home';
import Login from './paginas/Login';
import Cadastro from './paginas/Cadastro';
import QuemSomos from './paginas/Quem Somos';
import TermosECondicoes from './paginas/Termos e Condicoes';
import Privacidade from './paginas/Privacidade';
import MeusPedidos from './paginas/Meus Pedidos';
import MeusDados from './paginas/Meus Dados';
import HomePesquisa from './paginas/Home Pesquisa';
import FinalizarPedido from './paginas/Finalizar Pedido'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "cadastro",
    element: <Cadastro/>
  },
  {
    path: "quemsomos",
    element: <QuemSomos/>
  },
  {
    path: "termosecondicoes",
    element: <TermosECondicoes/>
  },
  {
    path: "privacidade",
    element: <Privacidade/>
  },
  {
    path: "meuspedidos",
    element: <MeusPedidos/>
  },
  {
    path: "meusdados",
    element: <MeusDados/>
  },
  {
    path: "pesquisa",
    element: <HomePesquisa/>
  },
  {
    path: "finalizarpedido",
    element: <FinalizarPedido/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
