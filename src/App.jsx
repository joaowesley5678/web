import React, { useState, useEffect } from 'react'
import Header from './header';
import Home from './home';
import Produtos from './produtos'
import Produto from './produto';
import Footer from './footer';
import './App.css';

function App() {
  const [currentContent, setCurrentContent] = useState('home');

  return (
    <div className='bg-white dark:bg-gray-800'>
        <div>
          {currentContent === 'home' && <Home setCurrentContent={setCurrentContent} />}
          {currentContent === 'produtos' && <Produtos />}
          {currentContent === 'produto' && <Produto />}
          
        </div>
        <Header setCurrentContent={setCurrentContent} />
        <div className='mt-60'>
          <Footer />
        </div>
    </div>
  )
}

export default App
