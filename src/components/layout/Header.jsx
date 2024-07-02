const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        localStorage.removeItem("user");
        window.location.href = "/";
    }

    return (
        <>
            <nav className=" h-[64px] px-10 text-[#EEEEEE] flex justify-between items-center">
                <div>
                    <img className="absolute top-0 left-0 w-[70px]" src="images/logo.png" alt="logo" />
                </div>
                <div>
                    <ul className="flex">
                        <li><a onClick={logout} className="cursor-pointer text-sm font-semibold leading-6 text-gray-900"> Log out <span aria-hidden="true">&rarr;</span></a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header;
