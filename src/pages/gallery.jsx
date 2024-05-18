function Gallery(){

    return(
        <div className="grid grid-rows-2 sm:grid-cols-1 lg:h-96 lg:w-96 bg-white absolute lg:right-20 lg:top-52 rounded-3xl top-96 right:2 h-48 w-82 overflow-y-scroll custom-scrollbar border-4 border-white">
            <div>
                <img src="./assets/pic1.jpeg" className="h-full max-w-full"/>
            </div><br />
            <div>
                <img src="./assets/pic3.jpeg" className="h-full max-w-full"/>
            </div>
            <div>
                <img src="./assets/pic2.jpeg" className="h-full max-w-full"/>         
            </div>
        </div>
    )
}

export default Gallery 