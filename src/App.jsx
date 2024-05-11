import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Contact from './pages/contact'
import Info from './pages/info'
import Projects from './pages/projects'

function App() {

  return (
    <div className='bg-image bg-cover bg-center min-h-screen source-code-pro-500 relative'>
      
  
    <center>
      <div className='lg:mt-0 sm:mt-16'><br />
        <a href="/projects" className='block text-2xl text-center mb-4 sm:inline-block hover:text-3xl shadow0 sm:mr-4 hover:text-gray-700 transition duration-100 ease-in-out'>PROJECTS</a>
        <a href="/info" className='block text-2xl text-center mb-4 lg:pl-20 sm:inline-block hover:text-3xl shadow0 sm:mr-4 hover:text-gray-700 transition duration-100 ease-in-out'>KNOW ME</a>
        <a href="/contact" className='block text-2xl text-center hover:text-gray-700 hover:text-3xl shadow0 transition duration-100 ease-in-out'>GET IN TOUCH</a>
      </div>
    </center>
    <br />
    <div className='lg:mt-52 lg:mr-80 text-center text-4xl'>
    <h1 className='lg:text-3xl sm:text-5xl font-bold hover:text-6xl'>(ʕ •ᴥ•ʔ )</h1>
      <h1 className='text-3xl sm:text-6xl md:text-5xl lg:text-8xl font-bold'>Hello!</h1>
      <h3 className='text-xl sm:text-4xl md:text-3xl lg:text-6xl font-semibold'>It's me <i><b>Adithya</b></i></h3>
    </div>
    
    <div className='absolute bottom-0 w-full text-center'>
      <p className='text-lg sm:text-xl lg:text-2xl inline-block mr-10'><a href="https://github.com/adithya1770/adithya1770">Github</a></p>
      <p className='text-lg sm:text-xl lg:text-2xl inline-block'>2024AdithyaPS</p>
    </div>

    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/info" element={<Info />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    
      <div className='h-36 w-32 bg-white absolute lg:top-12 rounded-full lg:left-10 left-28 bottom-12'>
        <img src="./assets/comp.png" className='h-36 w-32 rounded-full'/>
      </div>
  </div>
  )
}

export default App
