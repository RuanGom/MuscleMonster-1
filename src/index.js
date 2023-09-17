import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import HomeAdm from './pages/adm/home-adm';
import Addproduto from './pages/add-produto';
import ProdutoAdm from './pages/adm/produto-adm';
import ClientesAdm from './pages/adm/clientes-adm';
import VendasAdm from './pages/adm/vendas-adm';
import Cadastro from './pages/cadastro'
import Login from './pages/login'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/adm/home' element={<HomeAdm />} />
        <Route path='/add-produto' element={<Addproduto />} />
        <Route path='/adm/produto' element={<ProdutoAdm />} />
        <Route path='/adm/busca-cliente' element={<ClientesAdm />} />
        <Route path='/adm/vendas' element={<VendasAdm />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

