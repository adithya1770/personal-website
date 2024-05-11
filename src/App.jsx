import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Contact from './pages/contact'
import Info from './pages/info'
import Projects from './pages/projects'

function App() {

  return (
   <div className='bg-image bg-cover bg-center h-screen source-code-pro-500'>
    <div className='h-36 w-32 bg-white absolute top-5 left-12 rounded-full'>
      <img src="./assets/comp.png" className='h-36 w-32 absolute rounded-full'/>
    </div>
      <center><br />
      <div className='float-right flex'>
        <a href="/projects" className='text-xl lg:pr-14 lg:pl-24 hover:text-2xl shadow0  transition duration-100 ease-in-out hover:text-gray-700 sm:pr-3'>PROJECTS |</a>
        <a href="/info" className='text-xl lg:pr-14 hover:text-2xl shadow0  transition duration-100 ease-in-out hover:text-gray-700 sm:pr-2'>KNOW ME |</a>
        <a href="/contact" className='text-xl lg:pr-14 hover:text-2xl shadow0  transition duration-100 ease-in-out hover:text-gray-700 sm:pr-4'>GET IN TOUCH</a>
      </div>
      </center>
    <div className='lg:m-56 font-bold sm:text-5xl m-60'>
      <h1 className='text-3xl'>( ͡• ͜ʖ ͡• )</h1>
      <h1 className='lg:text-8xl sm:text-6xl'>Hello!</h1>
      <h3 className='lg:text-6xl sm:text-xl'>Its me <i>Adithya</i></h3>
    </div>
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/info" element={<Info />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
    <div>
      <p className='lg:text-2xl float-right pr-10 press-start-2p-regular'><a href="https://github.com/adithya1770/adithya1770">Github</a></p>
      <p className='lg:text-2xl pl-10 text-bold inline-block press-start-2p-regular'>2024 AdithyaPS</p>
    </div>
   </div>
  )
}

export default App
