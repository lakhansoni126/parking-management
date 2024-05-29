import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("user");
        navigate('/login')
    }
    return (
        <>
            <nav className="bg-[#150050] px-10 text-white flex justify-between items-center">
                <div>
                    <img className="w-16" src="../../../public/images/favicon.png" alt="" />
                </div>
                <div className="" >
                    <ul className="flex">
                        <li><a className="px-7 py-[23px] hover:bg-[#3F0071] " href=""> Home</a></li>
                        <li><a className="px-7 py-[23px] hover:bg-[#3F0071] " href=""> AboutUS</a></li>
                        <li><a onClick={logout} className="px-7 py-[10px] rounded-sm bg-orange-600 hover:bg-[#ff6a00] " href=""> Logout</a></li>
                        <li></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header
