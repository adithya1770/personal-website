function Gallery(){

    return(
        <div className="lg:w-96 lg:h-96 absolute lg:top-44 lg:right-44 lg:text-6xl text-2xl sm:text-center h-64 w-64 bottom-44 right-10 rounded-xl bg-white custom-scrollbar overflow-scroll">
            <img src="./assets/pic1.jpeg" className="lg:h-52 lg:w-full h-36 w-full rounded-xl"/>
            <img src="./assets/pic2.jpeg" className="lg:h-44 lg:w-full mt-26 rounded-xl"/>
        </div>
    )
}

export default Gallery 