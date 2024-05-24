import { useState } from 'react';


function UserProfile() {
    const [formData, setFormData] = useState({

        name: '',
        uid: uid,
        contactInfo: '',
        email: user.email,
        officeNum: '',
        vehicleNum: '',
        vehicleType: "",
        role: role
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };



    return (
        <>
            <section className='min-h-screen bg-[#191825] flex flex-col justify-center items-center'>
                <div>
                    <div className='flex flex-col pl-[40px] text-white'>
                        <label>
                            Name*
                            <div>
                                <input
                                    onChange={handleChange}
                                    value={formData.name}
                                    className='w-[400px] border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5 '
                                    type="text"
                                    placeholder={user.displayName}
                                    name="name" // Added name attribute
                                />
                            </div>
                        </label>
                        <div>
                            <label>
                                Mobile number (optional)
                                <div>
                                    <input
                                        onChange={handleChange}
                                        value={formData.contactInfo}
                                        className='w-[400px] border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5 '
                                        type="text" // Changed from type="number"
                                        placeholder="Mobile number"
                                        name="contactInfo" // Added name attribute
                                    />
                                </div>
                            </label>
                        </div>
                        <label>
                            Office/Flat*
                            <div>
                                <input
                                    onChange={handleChange}
                                    value={formData.office}
                                    name="office"
                                    className='w-[400px] border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5 '
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
                                        onChange={handleChange}
                                        value={formData.vehicleNum}
                                        className='w-[400px] border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5 '
                                        type="text"
                                        placeholder="Enter vehicle number"
                                        name="vehicleNum" // Added name attribute
                                    />
                                </div>
                            </label>
                        </div>
                        <div>
                            <label>
                                Vehicle*
                                <div>
                                    <select
                                        onChange={handleChange}
                                        value={formData.vehicleType}
                                        className='bg-transparent border-[#3F0071] border-b-[2px] p-1 mb-7'
                                        name="vehicleType" // Added name attribute
                                    >
                                        <option value="" disabled>Select your vehicle</option>
                                        <option value="Car">Car</option>
                                        <option value="Bike">Bike</option>
                                    </select>
                                </div>
                            </label>
                        </div>
                        <button onClick={handleSubmit} className="bg-[#865DFF] font-bold text-[17px] px-4 p-1 rounded-[20px] hover:bg-[#6836fe] mb-7">
                            Submit
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default UserProfile;
