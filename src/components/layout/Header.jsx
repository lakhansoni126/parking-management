const Header = () => {
    const logout = () => {
        localStorage.removeItem("user");
    }
    return (
        <>
            <nav className="bg-[#393E46] h-16 px-10 text-[#EEEEEE] flex justify-between items-center">
                <div>
                    <img className="w-16" src="/images/favicon.png" alt="" />
                </div>
                <div className="" >
                    <ul className="flex">
                        <li><a className="px-7 cursor-pointer py-[23px] hover:text-[#EEEEEE]" > Home</a></li>
                        <li><a className="px-7 cursor-pointer py-[23px] hover:text-[#EEEEEE] "> AboutUS</a></li>
                        <li><a onClick={logout} className="px-7 py-[10px] rounded-sm bg-[#FF5722] hover:bg-[#ff6a00] " href="/"> Logout</a></li>
                        <li></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header
