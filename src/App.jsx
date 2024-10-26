import React, { useState, useEffect } from 'react'
import Header from './header';
import Home from './home';
import ProdutosPage from './produtos'
import ProdutoPage from './produto';
import { Produto } from './data';
import Footer from './footer';
import './App.css';

function App() {
  const [currentContent, setCurrentContent] = useState('home');
  const [idProduto, setIdProduto] = useState(0)

  return (
    <div className='bg-white dark:bg-gray-800'>
        <div>
          {currentContent === 'home' && <Home setCurrentContent={setCurrentContent} setIdProduto={setIdProduto} />}
          {currentContent === 'produtos' && <ProdutosPage />}
          {currentContent === 'produto' && <ProdutoPage idProduto={idProduto} Produto={Produto}/>}
          
        </div>
        <Header setCurrentContent={setCurrentContent} />
        <div className='mt-60'>
          <Footer />
        </div>
    </div>
  )
}

export default App
