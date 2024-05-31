import PropTypes from "prop-types";
import { getDatabase, ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";


function GuardProfile({ user, onSubmit, onChange, values }) {
    const { building, name, contactInfo, employeeId, floor, } = values || {};
    const [buildingNames, setBuildingNames] = useState([]);


    useEffect(() => {
        const db = getDatabase();
        const buildingsRef = ref(db, 'buildings');
        onValue(buildingsRef, (snapshot) => {
            const data = snapshot.val();
            const buildingNamesList = data ? Object.values(data).map(building => building.buildingName) : [];
            setBuildingNames(buildingNamesList);
        });
    }, []);
    return (
        <>
            <section className='min-h-screen bg-[#222831] flex flex-col justify-center items-center'>
                <div>
                    <div className='flex flex-col pl-[40px] text-white'>
                        <label>
                            Name*
                            <div>
                                <input
                                    onChange={onChange}
                                    value={name}
                                    name="name"
                                    className='w-[400px] border-b-2 border-[#393E46] bg-transparent mb-7 mr-5 '
                                    type="text"
                                    placeholder={"Enter Your Name"}
                                />
                            </div>
                        </label>
                        <div>
                            <label>
                                Mobile number*
                                <div>
                                    <input
                                        onChange={onChange}
                                        value={contactInfo}
                                        name="contactInfo"
                                        className='w-[400px] noscroll border-b-2 border-[#393E46] bg-transparent mb-7 mr-5 '
                                        type="number"
                                        placeholder="mobile number"
                                    />
                                </div>
                            </label>
                        </div>
                        <div>
                            <label>
                                Building*
                                <div>
                                    <select
                                        onChange={onChange}
                                        value={building}
                                        name="building"
                                        required
                                        className='w-[400px] border-b-2 border-[#393E46] bg-[#222831] mb-7 mr-5'
                                    >
                                        <option value="" disabled>Select your building</option>
                                        {buildingNames.map((buildingName, index) => (
                                            <option key={index} value={buildingName}>
                                                {buildingName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </label>
                        </div>
                        <label>
                            Employee ID*
                            <div>
                                <input
                                    onChange={onChange}
                                    value={employeeId}
                                    name="employeeId"
                                    className='w-[400px] border-b-2 border-[#393E46] bg-transparent mb-7 mr-5 '
                                    type="text"
                                    placeholder="Enter your office/flat number"
                                />
                            </div>
                        </label>
                        <label>
                            Floor*
                            <div>
                                <input
                                    onChange={onChange}
                                    value={floor}
                                    name="floor"
                                    className='w-[400px] border-b-2 border-[#393E46] bg-transparent mb-7 mr-5 '
                                    type="text"
                                    placeholder="Enter your office/flat number"
                                />
                            </div>
                        </label>

                        <button onClick={onSubmit} className="bg-[#FF5722] font-bold text-[17px] px-4 p-1 rounded-[20px] hover:bg-[#393E46] mb-7">
                            Submit
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

GuardProfile.propTypes = {
    user: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired,
};

export default GuardProfile;
