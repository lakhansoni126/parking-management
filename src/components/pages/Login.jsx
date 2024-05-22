

const Login = () => {
    return (
        <>
            <section className="bg-[#191825] h-screen">
                <nav className="bg-[#865DFF] flex text-white  justify-between text-center px-10 items-center">

                    <div><img className="w-14" src="../../../public/images/logo.png" alt="" /></div>
                    <div><ul><li className=" hover:scale-[1.09] px-[20px] cursor-pointer ">Login</li></ul></div>

                </nav>

                <div className="flex justify-around mt-[20vh]" >
                    <div className="text-white py-20">
                        <h1 className="font-bold text-[24px]">Parking Management </h1>
                        <h1 className="text-[18px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, laboriosam?</h1>
                        <h1 className="text-[18px]">Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                        <button className="bg-[#865DFF] text-[20px] px-4 p-1 rounded-[20px] my-5" >Login</button>

                    </div>
                    <div>
                        <img className="w-96 border-2 rounded-lg" src="../../../images/logo.png" alt="" />
                    </div>
                </div>

            </section>
        </>
    )
}

export default  Login
