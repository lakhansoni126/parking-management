import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

function UserProfile({ user, values, onChange, onSubmit }) {
    const { name, building, contactInfo, officeNum, vehicleNum, vehicleType } = values || {};
    const [displayName, setDisplayName] = useState(name || user.displayName);
    const [buildingNames, setBuildingNames] = useState([]);

    useEffect(() => {
        const db = getDatabase();
        const buildingsRef = ref(db, 'buildings');

        onValue(buildingsRef, (snapshot) => {
            const data = snapshot.val();
            const buildingNamesList = data ? Object.values(data).map(building => building.buildingName) : [];
            setBuildingNames(buildingNamesList);
        });

        if (name !== undefined) {
            setDisplayName(name);
        }
    }, [name]);

    const handleInputChange = (event) => {
        const { name: fieldName, value } = event.target;

        if (fieldName === "name") {
            setDisplayName(value);
        }

        onChange({
            target: {
                name: fieldName,
                value,
            },
        });
    };

    const handleVehicleNumChange = (event) => {
        const upperCaseValue = event.target.value.toUpperCase();
        onChange({
            target: {
                name: event.target.name,
                value: upperCaseValue,
            },
        });
    };

    return (
        <section className='min-h-screen bg-[#191825] flex flex-col justify-center items-center'>
            <div>
                <div className='flex flex-col pl-[40px] text-white'>
                    <label>
                        Name*
                        <div>
                            <input
                                onChange={handleInputChange}
                                value={name}
                                className='w-[400px] border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5'
                                type='text'
                                placeholder={"Enter Your Name"}
                                name='name'
                            />
                        </div>
                    </label>
                    <div>
                        <label>
                            Mobile number (optional)
                            <div>
                                <input
                                    onChange={handleInputChange}
                                    value={contactInfo}
                                    className='w-[400px] border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5'
                                    type="number"
                                    placeholder="Mobile number"
                                    name="contactInfo"
                                />
                            </div>
                        </label>
                    </div>
                    <div>
                        <label>
                            Building*
                            <div>
                                <select
                                    onChange={handleInputChange}
                                    value={building}
                                    name="building"
                                    required
                                    className='w-[400px] border-b-2 border-[#3F0071] bg-[#252437] mb-7 mr-5'
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
                        Office/Flat*
                        <div>
                            <input
                                onChange={handleInputChange}
                                value={officeNum}
                                name="officeNum"
                                required
                                className='w-[400px] border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5'
                                type="text"
                                placeholder="Enter your office/flat number"
                            />
                        </div>
                    </label>
                    <div>
                        <label>
                            Vehicle number*
                            <div>
                                <input
                                    onChange={handleVehicleNumChange}
                                    value={vehicleNum}
                                    className='w-[400px] border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5'
                                    type='text'
                                    placeholder='Enter vehicle number'
                                    name='vehicleNum'
                                />
                            </div>
                        </label>
                    </div>
                    <div>
                        <label>
                            Vehicle*
                            <div>
                                <select
                                    onChange={handleInputChange}
                                    value={vehicleType}
                                    className='bg-[#252437] border-[#3F0071] border-b-[2px] p-1 mb-7'
                                    name="vehicleType"
                                >
                                    <option value="" disabled>Select your vehicle</option>
                                    <option value="Car">Car</option>
                                    <option value="Bike">Bike</option>
                                </select>
                            </div>
                        </label>
                    </div>
                    <button onClick={onSubmit} className="bg-[#865DFF] font-bold text-[17px] px-4 p-1 rounded-[20px] hover:bg-[#6836fe] mb-7">
                        Submit
                    </button>
                </div>
            </div>
        </section>
    );
}

UserProfile.propTypes = {
    user: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired,
};

export default UserProfile;
