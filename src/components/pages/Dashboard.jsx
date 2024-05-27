
const Dashboard = () => {
    return (
        <>
            <section className="h-screen bg-[#610094]">
                <div className="flex text-white">
                    <div className="h-screen w-[20vw] pt-5 border-r-2 border-r-[#150050]  text-[18px] font-bold">

                        <div><button className="w-full border-[#150050] border-b-2 pb-5 align-text-center">Profile</button></div>
                        <div><button className="w-full border-[#150050] py-5 border-b-2 align-text-center">Complain</button></div>

                    </div>

                    <div className="w-[80vw] flex flex-col items-center   ">
                        <h1 className="font-bold text-[20px] mt-[120px]"> User Information</h1>
                        <div className="flex gap-4 text-[20px] mt-10"><h2 className="font-bold">Name</h2><h4>abc</h4></div>
                        <div className="flex gap-4 text-[20px] mt-10"><h4 className="font-bold">email</h4><h4>abc</h4></div>
                        <div className="flex gap-4 text-[20px] mt-10"><h4 className="font-bold">office Number</h4><h4>abc</h4></div>
                        <div className="flex gap-4 text-[20px] mt-10"><h4 className="font-bold">vehicle Number</h4><h4>abc</h4></div>
                        <div className="flex gap-4 text-[20px] mt-10"><h4 className="font-bold">vehicle Type</h4><h4>abc</h4></div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Dashboard
