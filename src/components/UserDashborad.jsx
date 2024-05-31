import { useEffect, useState } from 'react'

const UserDashborad = () => {
    const [activeSection, setActiveSection] = useState('profile');
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUserData(JSON.parse(storedUser));
        }
    }, []);
    return (
        <>
            <section className="h-screen bg-[#222831]">
                <div className="flex text-[#EEEEEE]">
                    <div className="h-screen w-[20vw] pt-5 border-r-2 border-r-[#393E46] text-[18px] font-bold">
                        <div>
                            <button
                                className="w-full hover:bg-[#393E46] rounded-md p-5 align-text-center"
                                onClick={() => setActiveSection('profile')}
                            >
                                Profile
                            </button>
                        </div>
                        <div>
                            <button
                                className="w-full  hover:bg-[#393E46]  p-5 rounded-md align-text-center"
                                onClick={() => setActiveSection('complain')}
                            >
                                Complain
                            </button>
                        </div>
                    </div>

                    {activeSection === 'profile' && userData && (
                        <div id="User-info" className="w-[80vw] flex flex-col items-center">
                            <h1 className="font-bold text-[20px] mt-[120px]">User Information</h1>
                            <div className="flex gap-4 text-[20px] mt-10">
                                <h2 className="font-bold">Name</h2>
                                <h4>{userData.name || 'N/A'}</h4>
                            </div>
                            <div className="flex gap-4 text-[20px] mt-10">
                                <h4 className="font-bold">Email</h4>
                                <h4>{userData.email || 'N/A'}</h4>
                            </div>
                            <div className="flex gap-4 text-[20px] mt-10">
                                <h4 className="font-bold">Office Number</h4>
                                <h4>{userData.officeNum || 'N/A'}</h4>
                            </div>
                            <div className="flex gap-4 text-[20px] mt-10">
                                <h4 className="font-bold">Vehicle Number</h4>
                                <h4>{userData.vehicleNum || 'N/A'}</h4>
                            </div>
                            <div className="flex gap-4 text-[20px] mt-10">
                                <h4 className="font-bold">Vehicle Type</h4>
                                <h4>{userData.vehicleType || 'N/A'}</h4>
                            </div>
                        </div>
                    )}

                    {activeSection === 'complain' && (
                        <div id="Complain" className="w-[80vw]">
                            <h1 className="font-bold text-[20px] pl-10 mt-[40px]">Complaints</h1>
                            <ul className="mt-10">
                                <li className="py-5 pl-10 hover:bg-[#393E46]">Parking is not allowed here</li>
                                <li className="py-5 pl-10 hover:bg-[#393E46]">Your vehicle is too cheap</li>
                                <li className="py-5 pl-10 hover:bg-[#393E46]">Swift and Baleno owners are not allowed</li>
                                <li className="py-5 pl-10 hover:bg-[#393E46]">Can you sell your Polo for 100 rupees?</li>
                            </ul>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}

export default UserDashborad
