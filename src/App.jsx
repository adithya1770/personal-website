import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Contact from './pages/contact'
import Info from './pages/info'
import Projects from './pages/projects'

function App() {

  const thumbsUp = () => {
    const element = document.getElementById("thumb");
    if(element.innerText==="recommend"){
      element.innerText="thumb_down";
    }
    else{
      element.innerText="recommend";
    }
  }

  return (
    <div className='bg-image bg-cover bg-center min-h-screen source-code-pro-500 relative'>
      
  
    <center>
      <div className='lg:mt-0 sm:mt-16'><br />
        <a href="/projects" className='block text-2xl text-center mb-4 sm:inline-block hover:text-3xl shadow0 sm:mr-4 hover:text-white transition duration-100 ease-in-out h-10 w-44 hover:backdrop-blur-lg rounded-xl bg-pixel'>PROJECTS</a>
        <a href="/info" className='block text-2xl text-center mb-4 lg:pl-15 sm:inline-block hover:text-3xl shadow0 sm:mr-4 hover:text-white transition duration-100 ease-in-out h-10 w-48 hover:backdrop-blur-lg rounded-xl bg-pixelred'>KNOW ME</a>
        <a href="/contact" className='block text-2xl text-center hover:text-white hover:text-3xl shadow0 transition duration-100 ease-in-out h-10 w-44 hover:backdrop-blur-lg rounded-xl bg-pixelgreen'>CONTACT</a>
      </div>
    </center>
    <br />
    <div className='lg:mt-52 lg:mr-80 text-center text-4xl'>
    <h1 className='lg:text-3xl sm:text-4xl font-bold hover:text-5xl hover:text-blue-500'>(ʕ •-•ʔ )</h1>
      <h1 className='text-3xl sm:text-8xl md:text-5xl lg:text-8xl font-bold '>Hello!</h1>
      <h3 className='text-xl sm:text-4xl md:text-3xl lg:text-6xl font-semibold'>It's me <i><b className='text-2xl'>Adithya!!</b></i></h3>
    </div>
    
    <div className='absolute bottom-0  text-center h-10 w-full bg-black text-white'>
      <p className='text-lg sm:text-xl lg:text-2xl inline-block mr-5'><a href="https://github.com/adithya1770/adithya1770">Github </a></p>
      <p className='text-lg sm:text-xl lg:text-2xl inline-block pl-5'>2024</p>
      <p className='text-lg sm:text-xl lg:text-2xl inline-block pl-10'>AdithyaPS&copy;</p>
    </div>

    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/info" element={<Info />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
      <div className='h-32 w-32 bg-white absolute lg:top-12 rounded-3xl lg:left-10 left-8 bottom-16 shadow-lg shadow-black'>
      <span class="material-symbols-outlined absolute lg:top-5 lg:left-52 text-8xl text-mult rounded-full left-44 hover:text-white" onClick={thumbsUp} id="thumb">recommend</span>
        <img src="./assets/img3.jpeg" className='h-32 w-32 rounded-3xl'/>
      </div>
  </div>
  )
}

export default App
