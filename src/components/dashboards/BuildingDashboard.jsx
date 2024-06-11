import { useEffect, useState, useCallback } from 'react';
import { getDatabase, ref, onValue, update } from 'firebase/database';

const db = getDatabase();
const guardsRef = ref(db, 'guards');

function BuildingDashboard() {
    const [guards, setGuards] = useState([]);

    useEffect(() => {
        const unsubscribe = onValue(guardsRef, (snapshot) => {
            const data = snapshot.val();
            const guardsList = data ? Object.entries(data).map(([id, guard]) => ({ id, ...guard })) : [];
            setGuards(guardsList);
        });

        return () => unsubscribe();
    }, []);

    const toggleAuth = useCallback((guardId, currentAuth) => {
        const guardRef = ref(db, `guards/${guardId}`);
        update(guardRef, { auth: !currentAuth });
    }, []);

    return (
        <section className="bg-[#222831] flex flex-col justify-center items-center py-8">
            <div className="text-[#EEEEEE]">
                <h1 className="text-4xl font-bold my-20 text-center">Building Dashboard</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {guards.map((guard, index) => (
                        <div key={index} className="bg-gray-200 rounded-lg shadow-md p-6">
                            <h2 className="text-lg font-semibold mb-2">{guard.name}</h2>
                            <p className="text-sm text-gray-600 mb-2"><strong>Email:</strong> {guard.email}</p>
                            <p className="text-sm text-gray-600 mb-2"><strong>Contact Info:</strong> {guard.contactInfo}</p>
                            <p className="text-sm text-gray-600 mb-2"><strong>Role:</strong> {guard.role}</p>
                            <p className="text-sm text-gray-600 mb-2"><strong>Building:</strong> {guard.building}</p>
                            <p className="text-sm text-gray-600 mb-2"><strong>Employee ID:</strong> {guard.employeeId}</p>
                            <div className="flex items-center">
                                <p className="text-sm text-gray-600 mr-2"><strong>Auth Status:</strong> {guard.auth ? 'True' : 'False'}</p>
                                <button
                                    className="bg-gray-700 text-white px-2 py-1 rounded"
                                    onClick={() => toggleAuth(guard.id, guard.auth)}
                                >
                                    Toggle Auth
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BuildingDashboard;
