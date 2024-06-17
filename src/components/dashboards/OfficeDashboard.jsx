import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

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

    }, []);


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
        <section className="bg-[#222831] h-[calc(100vh-64px)] flex flex-col justify-center items-center py-8">
            <div className="text-[#EEEEEE]">
                <h1 className="text-4xl font-bold my-20 text-center">Office Dashboard</h1>
                <div className="w-[90vw] flex-wrap flex items-center justify-center gap-10">
                    {users.map((user, index) => (
                        <div key={index} className="border-b h-[320px] bg-[#EEEEEE] p-5 rounded-sm w-96 text-[#222831] border-gray-700 hover:bg-gray-300 transition-colors">
                            <div className='h-[60px]'>
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
        </section>
    );
};

export default OfficeDashboard;
