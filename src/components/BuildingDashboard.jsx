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
        <section className="min-h-screen bg-[#191825] flex flex-col justify-center items-center py-8">
            <div className="text-white w-full max-w-6xl">
                <h1 className="text-4xl font-bold mb-8 text-center">Building Dashboard</h1>
                <div className="overflow-x-auto shadow-lg rounded-lg">
                    <table className="min-w-full bg-gray-800 rounded-lg">
                        <thead>
                            <tr className="bg-gray-700">
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
                                <tr key={index} className="border-b border-gray-700 hover:bg-gray-600 transition-colors">
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
                </div>
            </div>
        </section>
    );
}

export default BuildingDashboard;
