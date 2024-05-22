
const Header = () => {
    return (
        <>
            <nav className="bg-[#150050] px-10 text-white flex justify-between items-center">
                <div>
                    <img className="w-12" src="../../../images/logo.png" alt="" />
                </div>
                <div >
                    <ul className="flex">
                        <li><a className="px-7 py-[15px] hover:bg-[#8a00ff] " href=""> Home</a></li>
                        <li><a className="px-7 py-[15px] hover:bg-[#8a00ff] " href=""> Parking</a></li>
                        <li><a className="px-7 py-[15px] hover:bg-[#8a00ff] " href=""> Booking</a></li>
                        <li><a className="px-7 py-[15px] hover:bg-[#8a00ff] " href=""> AboutUS</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header
