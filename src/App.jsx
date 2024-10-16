import { useState } from 'react'
import menu from './assets/menu.png'
import login from './assets/login.png'
import sacola from './assets/sacola-de-compras.png'
import busca from './assets/lupa.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="bg-[#bdac7f] p-5" id="cabecalho">
            <div className="flex">
                <div className="flex">
                    <button type="button">
                        <img src={menu} alt="menu"/>
                    </button>
                    
                </div>
					<a href="#"><img src="" alt="logo"/></a>
              <div className="flex grow justify-center">
                <form>
                  <input className="w-[400px] h-10 bg-white rounded-full" type="text" placeholder="  Buscar"/>
                  <button className='relative end-11 top-2'>
                    <img className='w-7' src={busca} alt="lupa"/></button>
                </form>
              </div>
              <div className="flex grow-0">
                <a href="#">
                  <img src={sacola} alt="sacola"/>
                </a>
                <a href="#">
                  <img src={login} alt="login"/>
                    </a>
                </div>
            </div>
        </nav>
    </>
  )
}

export default App
