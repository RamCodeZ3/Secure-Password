function Header(){
    function handleImagenClick(){
        window.location.reload()
    }

    return(
        <>
        <header className="fixed top-0 left-0 flex items-center justify-between bg-[#1E1E1E] border-[#00774D] border-b-3 py-3 w-full">
            <img src="./image/SPI.png" alt="Logo" className="absolute w-[92px] h-[49px] cursor-pointer" onClick={handleImagenClick}/>
            <div className="flex flex-1 gap-15 justify-center items-center w-full text-[#00DD90]">
                <a href="/">Inicio</a>
                <a href="/">Información</a>
            </div>
        </header>
        </>
    )
}

export default Header