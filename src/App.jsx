import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Contact from './pages/contact'
import Info from './pages/info'
import Projects from './pages/projects'
import Gallery from './pages/gallery'

function App() {
  
  const alert1 = () => {
    const ele = document.getElementById("bear");
    if(ele.style.color === "white"){
      ele.style.color="brown";
      alert("Wait I turned into a grizzly bear!");
    }
    else{
      ele.style.color="white";
      alert("Now I am a polar bear!");
    }
  }

  const pfp = () => {
    const ele = document.getElementById("background");
    window.location.href = "/gallery";
  }

  useEffect(() => {
    const vid = document.getElementById("myVideo");
    vid.play().catch(error => {
      console.log('Video autoplay was prevented:', error);
    })
  })


  return (
    <div className='bg-cover bg-center min-h-screen source-code-pro-500 relative' id="background">
      <video autoplay muted loop id="myVideo" className=''>
            <source src="./assets/bgvid.mp4" type="video/mp4"/>
      </video>
      
    <center>
    <div className='h-28 w-28 bg-white absolute lg:top-12 rounded-full lg:left-10 left-32 bottom-14 shadow-lg shadow-black'>
      <button onClick={pfp}><img src="./assets/comp.png" className='rounded-full h-28 w-28' id="image"/></button>
      </div>
      <div className='lg:mt-0 sm:mt-16'><br />
        <a href="/projects" className='block text-2xl text-center mb-4 sm:inline-block hover:text-3xl shadow0 sm:mr-4 hover:text-white transition duration-100 ease-in-out h-10 w-44 hover:backdrop-blur-lg rounded-xl bg-pixel'>PROJECTS</a>
        <a href="/info" className='block text-2xl text-center mb-4 lg:pl-15 sm:inline-block hover:text-3xl shadow0 sm:mr-4 hover:text-white transition duration-100 ease-in-out h-10 w-48 hover:backdrop-blur-lg rounded-xl bg-pixelred'>KNOW ME</a>
        <a href="/contact" className='block text-2xl text-center hover:text-white hover:text-3xl shadow0 transition duration-100 ease-in-out h-10 w-44 hover:backdrop-blur-lg rounded-xl bg-pixelgreen'>CONTACT</a>
      </div>
    </center>
    <br />
    <div className='lg:mt-52 lg:mr-80 text-center text-4xl text-white'>
    <h1 className='lg:text-3xl sm:text-4xl font-bold hover:text-5xl hover:text-blue-500' onMouseOver={alert1} id="bear">(ʕ •-•ʔ )</h1>
      <h1 className='text-6xl sm:text-8xl md:text-5xl lg:text-8xl font-bold'>Hello!</h1>
      <h3 className='text-xl sm:text-4xl md:text-3xl lg:text-6xl font-semibold typewriter text-white'>It's me <i><b className='lg:text-6xl text-2xl'>Adithya!!</b></i></h3>
    </div>
    
    <div className='absolute bottom-0  text-center h-10 w-full text-white'>
      <p className='text-lg sm:text-xl lg:text-2xl inline-block mr-5'><a href="https://github.com/adithya1770/adithya1770">Github </a></p>
      <p className='text-lg sm:text-xl lg:text-2xl inline-block pl-5'>2024</p>
      <p className='text-lg sm:text-xl lg:text-2xl inline-block pl-10'>AdithyaPS&copy;</p>

      <img src="" id="img1" />
    </div>

    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/info" element={<Info />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  </div>
  )
}

export default App
