import "./styler.css"
function Projects(){
    return(
        <div className="lg:flex lg:w-96 lg:h-96 absolute lg:top-44 lg:right-44 font-semibold lg:text-xl lg:text-justify h-52 w-72 top-96 right-8 overflow-y-scroll custom-scrollbar">
            <ul>
                <li className="h-14 w-50 text-center rounded-xl bg-white hover:bg-orange-500 hover:text-xl"><b><a href="https://github.com/adithya1770/To-N-Do">To'N'Do</a></b> : A todo app made using ExpressJS</li><br />
                <li className="h-20 w-50 text-center rounded-xl bg-white hover:bg-orange-500 hover:text-xl"><b><a href="https://github.com/adithya1770/sceptix-webapp">OpenMath</a></b> : A Matrix calculator and Math Website</li><br />
                <li className="h-14 w-50 text-center rounded-xl bg-white hover:bg-orange-500 hover:text-xl" ><b><a href="https://github.com/adithya1770/learn-react">Farmy</a></b> : Web portal for famers(Beta)</li><br />
                <li className="h-14 w-50 text-center rounded-xl bg-white hover:bg-orange-500 hover:text-xl"><b className="underline hover:text-orange-500">SaveLyf</b> : Alcohol Detector using RaspberryPI</li>
            </ul>
        </div>
    )
}

export default Projects