import "./styler.css"
function Projects(){
    return(
        <div className="lg:flex lg:w-96 lg:h-96 absolute lg:top-44 lg:right-44 font-semibold lg:text-xl lg:text-justify h-52 w-94 top-96 right-0 overflow-y-scroll custom-scrollbar rounded-2xl">
            <ul>
                <li className="h-64 w-full text-center rounded-xl bg-white blur hover:blur-none hover:contrast-125 hover:text-xl"><b><a href="https://github.com/adithya1770/To-N-Do">To'N'Do</a></b>  <img src="./assets/cap1.png" className="h-50 w-full"/> A todo app made using ExpressJS</li><br />
                <li className="h-64 w-full text-center rounded-xl bg-white hover:text-xl blur hover:blur-none hover:contrast-125" ><b><a href="https://github.com/adithya1770/guessR">guessR</a></b>  <img src="./assets/projpic.jpeg" className="h-50 w-full"/> Guessing game</li><br />
                <li className="h-64 w-full text-center rounded-xl bg-white hover:text-xl blur hover:blur-none hover:contrast-125"><b><a href="https://github.com/adithya1770/sceptix-webapp">OpenMath</a></b> <img src="./assets/Capture.png" className="h-50 w-full"/> A Matrix calculator and Math Website</li><br />
                <li className="h-64 w-full text-center rounded-xl bg-white hover:text-xl blur hover:blur-none hover:contrast-125" ><b><a href="https://github.com/adithya1770/learn-react">Farmy</a></b>  <img src="./assets/home.png" className="h-50 w-full"/> Web portal for famers(Beta)</li><br />
                <li className="h-14 w-50 text-center rounded-xl bg-white hover:text-xl blur hover:blur-none hover:contrast-125"><b className="underline pt-10 hover:text-orange-500">SaveLyf</b> : Alcohol Detector using RaspberryPI</li>
            </ul>
        </div>
    )
}

export default Projects