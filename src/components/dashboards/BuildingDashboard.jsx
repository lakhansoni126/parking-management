import { useEffect, useState, useCallback } from 'react';
import { getDatabase, ref, onValue, update } from 'firebase/database';

const db = getDatabase();
const guardsRef = ref(db, 'guards');

function BuildingDashboard() {
    const [guards, setGuards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onValue(guardsRef, (snapshot) => {
            const data = snapshot.val();
            const guardsList = data ? Object.entries(data).map(([id, guard]) => ({ id, ...guard })) : [];
            setGuards(guardsList);
            setLoading(false);
        }, {
            onlyOnce: true // Optional: only fetch data once
        });

        return () => unsubscribe();
    }, []);
    const toggleAuth = useCallback((guardId, currentAuth) => {
    const guardRef = ref(db, `guards/${guardId}`);
    update(guardRef, { auth: !currentAuth })
        .then(() => {
            // Update local state after successful database update
            const updatedGuards = guards.map(guard => {
                if (guard.id === guardId) {
                    return { ...guard, auth: !currentAuth };
                }
                return guard;
            });
            setGuards(updatedGuards);
        })
        .catch(error => {
            console.error('Error toggling auth:', error);
        });
}, [guards]);


    if (loading) {
        return <div>
        <section className="bg-[#222831] text-[#EEEEEE] min-h-[calc(100vh-64px)] justify-center flex flex-col items-center py-8">
        <h1 className="text-4xl font-bold my-20 px-4 text-center">Building Dashboard</h1>
        <div className='h-[270px] text-xl '> Loading...</div>
        </section>
        </div>; // Optional: Show loading state while fetching data
    }

    return (
        <section className="bg-[#222831] min-h-[calc(100vh-64px)] flex flex-col justify-center items-center py-8">
            <div className="text-[#EEEEEE]">
                <h1 className="text-4xl font-bold my-20 px-4 text-center">Building Dashboard</h1>
                <div className="flex flex-wrap justify-center gap-6">
                    {guards.map((guard) => (
                        <div key={guard.id} className="relative bg-gray-200 rounded-lg w-[300px] shadow-md p-6">
                            <h2 className="flex justify-between text-lg text-[#222831] font-semibold">
                                {guard.name}
                                <div className="top-2 right-2">
                                    <label htmlFor={`toggleAuthButton_${guard.id}`} className="block bg-gray-300 w-[60px] relative h-[30px] rounded-full cursor-pointer">
                                        <div className={`circle h-[20px] w-[20px] absolute top-[5px] rounded-full ease ${guard.auth ? 'bg-green-500 right-[5px] transition-transform' : 'bg-red-500 left-[5px] transition-transform'}`} />
                                        <button
                                            id={`toggleAuthButton_${guard.id}`}
                                            className="bg-[#222831] hidden text-white px-2 py-1 rounded"
                                            onClick={() => toggleAuth(guard.id, guard.auth)}
                                        >
                                            Toggle Auth
                                        </button>
                                    </label>
                                </div>
                            </h2>
                            <p className="text-sm text-[#222831] mr-2 mb-5"><strong>Auth Status:</strong> {guard.auth ? 'True' : 'False'}</p>
                            <p className="text-sm text-[#222831] mb-2"><strong>Email:</strong> <p className=' '>{guard.email}</p></p>
                            <p className="text-sm text-[#222831] mb-2"><strong>Contact Info:</strong> <div>{guard.contactInfo}</div></p>
                            <p className="text-sm text-[#222831] mb-2"><strong>Role:</strong> <div>{guard.role}</div></p>
                            <p className="text-sm text-[#222831] mb-2"><strong>Building:</strong> <div>{guard.building}</div></p>
                            <p className="text-sm text-[#222831] mb-2"><strong>Employee ID:</strong> <div>{guard.employeeId}</div></p>
                        </div>
                    ))}
                    
                    
                </div>
            </div>
        </section>
    );
}

export default BuildingDashboard;
