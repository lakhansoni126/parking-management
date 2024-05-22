

const Signup = () => {
    return (
        <>
            <section className="bg-[#344e41] h-screen">
            <nav className="bg-[#588157] flex text-white  justify-between text-center px-10 items-center">

                <div><img className="w-14" src="../../../public/images/logo.png" alt="" /></div>

            </nav>

                <div className="flex justify-around mt-[30vh]" >
                    <div>
                        <h1>Parking Management </h1>
                    </div>
                    <form className="" action="">
                        <label className="block" for="name">Name</label>
                        <input className="block" type="text" name="name" id="name" />

                        <label className="block" for="email">Email</label>
                        <input className="block" type="email" name="email" id="email" />

                        <label className="block" for="password">Password</label>
                        <input className="block" type="password" name="password" id="password" />

                        <button type="submit">Login</button>

                    </form>
                </div>

            </section>
        </>
    )
}

export default Signup
