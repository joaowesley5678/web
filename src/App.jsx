import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className="bg-[#bdac7f] p-5" id="cabecalho">
            <div className="flex">
                <div className="flex">
                    <button type="button">
                        <img src="" alt="menu"/>
                    </button>
                    
                </div>
					<a href="#"><img src="" alt="logo"/></a>
              <div className="flex grow justify-center">
                <form>
                  <input className="w-[400px] h-10 bg-white rounded-full" type="text" placeholder="  Buscar"/>
                  <button className='relative end-8'><img src="" alt="lupa"/></button>
                </form>
              </div>
              <div className="flex grow-0">
                <a href="#">
                  <img src="" alt="sacola"/>
                </a>
                <a href="#">
                  <img src="" alt="login"/>
                    </a>
                </div>
            </div>
        </nav>
    </>
  )
}

export default App
