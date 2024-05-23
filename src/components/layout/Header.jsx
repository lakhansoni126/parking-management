
const Header = () => {
    return (
        <>
            <nav className="bg-[#150050] px-10 text-white flex justify-between items-center">
                <div>
                    <img className="w-16" src="../../../public/images/favicon.png" alt="" />
                </div>
                <div className="mt-[10px]" >
                    <ul className="flex">
                        <li><a className="px-7 py-[23px] hover:bg-[#3F0071] " href=""> Home</a></li>
                        <li><a className="px-7 py-[23px] hover:bg-[#3F0071] " href=""> Parking</a></li>
                        <li><a className="px-7 py-[23px] hover:bg-[#3F0071] " href=""> Booking</a></li>
                        <li><a className="px-7 py-[23px] hover:bg-[#3F0071] " href=""> AboutUS</a></li>
                        <li><a className="h-auto block  " href=""> <i className='bx bxs-user-circle' style={{ fontSize: '40px',marginTop:'-10px' }}></i></a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header
