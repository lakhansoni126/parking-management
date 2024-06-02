import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

function BuildingDashboard() {
    const [guards, setGuards] = useState([]);

    useEffect(() => {
        const db = getDatabase();
        const guardsRef = ref(db, 'guards');
        onValue(guardsRef, (snapshot) => {
            const data = snapshot.val();
            const guardsList = data ? Object.values(data) : [];
            setGuards(guardsList);
        });
    }, []);

    return (
        <section className="  bg-[#222831] flex flex-col  justify-center items-center py-8">
            <div className=" text-[#EEEEEE] ">
                <h1 className="text-4xl font-bold my-20 text-center">Building Dashboard</h1>
                


                    {/* <div className="overflow-x-auto shadow-lg rounded-lg">
                    <table className="w-full bg-gray-800 rounded-lg">
                        <thead>
                            <tr className="bg-[#393E46]">
                                <th className="py-3 px-4 text-left">Name</th>
                                <th className="py-3 px-4 text-left">Email</th>
                                <th className="py-3 px-4 text-left">Contact Info</th>
                                <th className="py-3 px-4 text-left">Role</th>
                                <th className="py-3 px-4 text-left">Building</th>
                                <th className="py-3 px-4 text-left">Employee Id </th>
                            </tr>
                        </thead>
                        <tbody>
                            {guards.map((guard, index) => (
                                <tr key={index} className="border-b bg-[#EEEEEE] text-[#222831] border-gray-700 hover:bg-gray-300 transition-colors">
                                    <td className="py-3 px-4">{guard.name}</td>
                                    <td className="py-3 px-4">{guard.email}</td>
                                    <td className="py-3 px-4">{guard.contactInfo}</td>
                                    <td className="py-3 px-4">{guard.role}</td>
                                    <td className="py-3 px-4">{guard.buildingName}</td>
                                    <td className="py-3 px-4">{guard.employeeId}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                {/* <div className="overflow-x-auto shadow-lg rounded-lg">
                    <table className="w-full bg-gray-800 rounded-lg">
                        <thead>
                            <tr className="bg-[#393E46]">
                                <th className="py-3 px-4 text-left">Name</th>
                                <th className="py-3 px-4 text-left">Email</th>
                                <th className="py-3 px-4 text-left">Contact Info</th>
                                <th className="py-3 px-4 text-left">Role</th>
                                <th className="py-3 px-4 text-left">Building</th>
                                <th className="py-3 px-4 text-left">Employee Id </th>
                            </tr>
                        </thead>
                        <tbody>
                            {guards.map((guard, index) => (
                                <tr key={index} className="border-b bg-[#EEEEEE] text-[#222831] border-gray-700 hover:bg-gray-300 transition-colors">
                                    <td className="py-3 px-4">{guard.name}</td>
                                    <td className="py-3 px-4">{guard.email}</td>
                                    <td className="py-3 px-4">{guard.contactInfo}</td>
                                    <td className="py-3 px-4">{guard.role}</td>
                                    <td className="py-3 px-4">{guard.buildingName}</td>
                                    <td className="py-3 px-4">{guard.employeeId}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div> */}
                    <div className="w-[90vw] flex-wrap flex items-center justify-center gap-10">
                        {guards.map((guard, index) => (
                            <div key={index} className="border-b h-[400px] bg-[#EEEEEE] p-5 rounded-sm w-96  text-[#222831] border-gray-700 hover:bg-gray-300 transition-colors">
                            <div className='h-[60px]'>
                                <h2 className="">Name :</h2>
                                <h2 className="font-bold ">{guard.name}</h2>
                                </div>
                                <div className='h-[60px]'>
                                <h2 className="">Email :</h2>
                                <h2 id='email' className="font-bold ">{guard.email}</h2>
                                </div>
                                <div className='h-[60px]'>
                                <h2 className="">Contact Info :</h2>
                                <h2 className="font-bold ">{guard.contactInfo}</h2>
                                </div>
                                <div className='h-[60px]'>
                                <h2 className="">Role :</h2>
                                <h2 className="font-bold ">{guard.role}</h2>
                                </div>
                                <div className='h-[60px]'>
                                <h2 className="">Building :</h2>
                                <h2 className="font-bold ">{guard.buildingName}</h2>
                                </div>
                                <div className='h-[60px]'>
                                <h2 className="">Employee ID :</h2>
                                <h2 className="font-bold ">{guard.employeeId}</h2>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
       

        </section>
    );
}

export default BuildingDashboard;
