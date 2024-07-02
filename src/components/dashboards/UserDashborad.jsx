import { useEffect, useState } from 'react';
import BottomDesign from '../Design/BottomDesign';
import TopDesign from "../Design/TopDesign"
const UserDashboard = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUserData(JSON.parse(storedUser));
        }
    }, []);

    return (
        <>
        <TopDesign/>
            <section id='User' className="h-[calc(100vh-64px)] ">
                <div id='button' className="  flex justify-center text-[#black]">
                    <div id="User-info" style={{boxShadow: " 0px 0px 10px rgb(230 153 255 / 74%)"}} className=" w-[550px] mt-[50px]    border-2 rounded-lg  pb-[50px] flex flex-col items-center">
                        <h1 className="font-bold text-[20px] mt-[50px] ">User Information</h1>
                        {userData ? (
                            <>
                                <div className="flex gap-4 justify-between w-[440px] text-[20px] mt-10">
                                    <h2 className="font-bold">Name :</h2>
                                    <h4>{userData.name || 'N/A'}</h4>
                                </div>
                                <div className="flex gap-4 justify-between w-[440px] text-[20px] mt-10">
                                    <h4 className="font-bold">Email :</h4>
                                    <h4>{userData.email || 'N/A'}</h4>
                                </div>
                                <div className="flex gap-4 justify-between w-[440px] text-[20px] mt-10">
                                    <h4 className="font-bold">Office Number :</h4>
                                    <h4>{userData.officeNum || 'N/A'}</h4>
                                </div>
                                <div className="flex gap-4 justify-between w-[440px] text-[20px] mt-10">
                                    <h4 className="font-bold">Vehicle Number :</h4>
                                    <h4>{userData.vehicleNum || 'N/A'}</h4>
                                </div>
                                <div className="flex gap-4 justify-between w-[440px] text-[20px] mt-10">
                                    <h4 className="font-bold">Vehicle Type :</h4>
                                    <h4>{userData.vehicleType || 'N/A'}</h4>
                                </div>
                            </>
                        ) : (
                            <p className="mt-10  text-[20px]">Loading user data...</p>
                        )}
                    </div>
                </div>
            </section>
            <BottomDesign/>
        </>
    );
}

export default UserDashboard;
