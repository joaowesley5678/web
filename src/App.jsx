import React, { useState, useEffect } from 'react'
import Header from './header';
import Carousel from './carrossel';
import Footer from './footer';
import './App.css';

function App() {

  const slidesLancamentos = [
    {
      imgSrc: "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg",
      name: "Produto 1",
      oferta: "",
      preco: "R$ 500,00",
    },
    {
      imgSrc: "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg",
      name: "Produto 2",
      oferta: "",
      preco: "R$ 500,00",
    },
    {
      imgSrc: "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg",
      name: "Produto 3",
      oferta: "",
      preco: "R$ 500,00",
    },
    {
      imgSrc: "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg",
      name: "Produto 4",
      oferta: "",
      preco: "R$ 500,00",
    },
    {
      imgSrc: "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg",
      name: "Produto 5",
      oferta: "",
      preco: "R$ 500,00",
    },
    {
      imgSrc: "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg",
      name: "Produto 6",
      oferta: "",
      preco: "R$ 500,00",
    },
  ];
  const slidesOfertas = [
    {
      imgSrc: "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg",
      name: "Produto 1",
      oferta: "R$ 500,00",
      preco: "R$ 379,90",
    },
    {
      imgSrc: "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg",
      name: "Produto 2",
      oferta: "R$ 500,00",
      preco: "R$ 379,90",
    },
    {
      imgSrc: "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg",
      name: "Produto 3",
      oferta: "R$ 500,00",
      preco: "R$ 379,90",
    },
    {
      imgSrc: "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg",
      name: "Produto 4",
      oferta: "R$ 500,00",
      preco: "R$ 379,90",
    },
    {
      imgSrc: "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg",
      name: "Produto 5",
      oferta: "R$ 500,00",
      preco: "R$ 379,90",
    },
    {
      imgSrc: "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg",
      name: "Produto 6",
      oferta: "R$ 500,00",
      preco: "R$ 379,90",
    },
  ];
  const slidesMaisVendidos = [
    {
      imgSrc: "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg",
      name: "Produto 1",
      oferta: "",
      preco: "R$ 379,90",
    },
    {
      imgSrc: "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg",
      name: "Produto 2",
      oferta: "",
      preco: "R$ 379,90",
    },
    {
      imgSrc: "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg",
      name: "Produto 3",
      oferta: "",
      preco: "R$ 379,90",
    },
    {
      imgSrc: "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg",
      name: "Produto 4",
      oferta: "",
      preco: "R$ 379,90",
    },
    {
      imgSrc: "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg",
      name: "Produto 5",
      oferta: "",
      preco: "R$ 379,90",
    },
    {
      imgSrc: "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg",
      name: "Produto 6",
      oferta: "",
      preco: "R$ 379,90",
    },
  ];

  const slidesCategorias = [
    {
      imgSrc: "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg",
      name: "Categoria 1",
      oferta: "",
      preco: "",
    },
    {
      imgSrc: "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg",
      name: "Categoria 2",
      oferta: "",
      preco: "",    },
    {
      imgSrc: "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg",
      name: "Categoria 3",
      oferta: "",
      preco: "",    },
    {
      imgSrc: "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg",
      name: "Categoria 4",
      oferta: "",
      preco: "",    },
    {
      imgSrc: "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg",
      name: "Categoria 5",
      oferta: "",
      preco: "",    },
    {
      imgSrc: "https://sma.ufc.br/wp-content/uploads/2022/07/7-1-300x199.jpg",
      name: "Categoria 6",
      oferta: "",
      preco: "",    },
  ];

  return (
    <div className='bg-white dark:bg-gray-800'>
        <div className='pt-24'>
          <div className='pb-1'>
            <div className='mx-10 sm:mx-20 xl:mx-28 w-full border-b'>
              <h1 className='w-1/6 text-black dark:text-white font-bold text-xl border-b-gray-800 dark:border-b-white border-b-2'>Laçamentos</h1>
            </div>
          </div>
          <Carousel slidesData={slidesLancamentos} />
        </div>
        <div className='pt-24'>
          <div className='pb-1'>
            <div className='mx-10 sm:mx-20 xl:mx-28 w-full border-b'>
              <h1 className='w-1/6 text-black dark:text-white font-bold text-xl border-b-gray-800 dark:border-b-white border-b-2'>Ofertas</h1>
            </div>
          </div>
          <Carousel slidesData={slidesOfertas} />
        </div>
        <div className='pt-24'>
          <div className='pb-1'>
            <div className='mx-10 sm:mx-20 xl:mx-28 w-full border-b'>
              <h1 className='w-1/6 text-black dark:text-white font-bold text-xl border-b-gray-800 dark:border-b-white border-b-2'>Categorias</h1>
            </div>
          </div>
          <Carousel slidesData={slidesCategorias} />
        </div>
        <div className='pt-24'>
          <div className='pb-1'>
            <div className='mx-10 sm:mx-20 xl:mx-28 w-full border-b'>
              <h1 className='w-1/6 text-black dark:text-white font-bold text-xl border-b-gray-800 dark:border-b-white border-b-2'>Mais vendidos</h1>
            </div>
          </div>
          <Carousel slidesData={slidesMaisVendidos} />
        </div>
        <Header />
        <div className='mt-60'>
          <Footer />
        </div>
    </div>
  )
}

export default App
