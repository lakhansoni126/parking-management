import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import BottomDesign from '../Design/BottomDesign';
import TopDesign from "../Design/TopDesign"

const OfficeDashboard = () => {
    const [users, setUsers] = useState([]);
    const [officeNumber, setOfficeNumber] = useState(null);
    const [buildingName, setBuildingName] = useState(null);

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem('user'));
        const storedOfficeNumber = loggedInUser?.officeNum;
        const storedBuildingName = loggedInUser?.building;

        if (storedOfficeNumber !== officeNumber) {
            setOfficeNumber(storedOfficeNumber);
        }
        if (storedBuildingName !== buildingName) {
            setBuildingName(storedBuildingName);
        }

    }, [] );


    useEffect(() => {
        if (!officeNumber || !buildingName) return;

        const db = getDatabase();
        const usersRef = ref(db, 'users');

        onValue(usersRef, (snapshot) => {
            const data = snapshot.val();
            const usersList = data ? Object.values(data) : [];

            const filteredUsers = usersList.filter(user => {
                return officeNumber.includes(user.officeNum) && user.building === buildingName;
            });

            setUsers(filteredUsers);
        });

    }, [officeNumber, buildingName]);

    return (
        <section className=" h-[calc(100vh-64px)] flex flex-col justify-center items-center pt-8 ">
        <TopDesign/>
            <div className="text-black">
                <h1 className="text-4xl font-bold mt-20 mb-10 text-center">Office Dashboard</h1>
                <div className="w-[90vw] flex-wrap flex items-center justify-center gap-10">
                    {users.map((user, index) => (
                        <div key={index} style={{boxShadow: " 0px 0px 10px rgb(230 153 255 / 74%)"}} className="border-b h-[320px] bg-[#e9d8ff63] p-5 rounded-lg w-64  text-[#222831]">
                            <div className=' h-[60px]'>
                                <h2 className="">Name :</h2>
                                <h2 className="font-bold">{user.name}</h2>
                            </div>
                            <div className='h-[60px]'>
                                <h2 className="">Office Number :</h2>
                                <h2 className="font-bold">{Array.isArray(user.officeNum) ? user.officeNum.join(', ') : user.officeNum}</h2>
                            </div>
                            <div className='h-[60px]'>
                                <h2 className="">Contact Number :</h2>
                                <h2 className="font-bold">{user.contactInfo}</h2>
                            </div>
                            <div className='h-[60px]'>
                                <h2 className="">Vehicle Number :</h2>
                                <h2 className="font-bold">{user.vehicleNum}</h2>
                            </div>
                            <div className='h-[60px]'>
                                <h2 className="">Vehicle Type :</h2>
                                <h2 className="font-bold">{user.vehicleType}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <BottomDesign/>
        </section>
    );
};

export default OfficeDashboard;
