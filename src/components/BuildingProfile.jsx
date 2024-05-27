import { useState } from 'react'

function BuildingProfile(uid, user, handleSubmit) {

    const [formData, setFormData] = useState({
        buildingName: '',
        contactInfo: '',
        altContactInfo: '',
        address: '',
        city: '',
        state: '',
        uid: uid,
        email: user.email
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
                <h2 className='text-white text-[20px] mb-20'>Building Information</h2>
                <div>
                    <div className='flex flex-col pl-[40px] text-white'>
                        <label>
                            Building Name*
                            <div>
                                <input
                                    onChange={handleChange}
                                    value={formData.name}
                                    name="name"
                                    className='w-[400px] border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5 '
                                    type="text"
                                    placeholder="Building Name"
                                />
                            </div>
                        </label>
                        <div>
                            <label>
                                Mobile number*
                                <div>
                                    <input
                                        onChange={handleChange}
                                        value={formData.contactInfo}
                                        name="contactInfo"
                                        className='w-[400px] noscroll border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5 '
                                        type="number"
                                        placeholder="mobile number"
                                    />
                                </div>
                            </label>
                        </div>
                        <div>
                            <label>
                                Alternate number*
                                <div>
                                    <input
                                        onChange={handleChange}
                                        value={formData.altContactInfo}
                                        name="altContactInfo"
                                        className='w-[400px] noscroll border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5 '
                                        type="number"
                                        placeholder="mobile number"
                                    />
                                </div>
                            </label>
                        </div>

                        <label>
                            Full Address*
                            <div>
                                <input
                                    onChange={handleChange}
                                    value={formData.address}
                                    name="address"
                                    className='w-[400px] border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5 '
                                    type="text"
                                    placeholder="Enter your office/flat number"
                                />
                            </div>
                        </label>
                        <label>
                            City*
                            <div>
                                <input
                                    onChange={handleChange}
                                    value={formData.city}
                                    name="city"
                                    className='w-[400px] border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5 '
                                    type="text"
                                    placeholder="Enter your office/flat number"
                                />
                            </div>
                        </label>
                        <label>
                            State*
                            <div>
                                <input
                                    onChange={handleChange}
                                    value={formData.state}
                                    name="state"
                                    className='w-[400px] border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5 '
                                    type="text"
                                    placeholder="Enter your office/flat number"
                                />
                            </div>
                        </label>


                        <button onClick={handleSubmit} className="bg-[#865DFF] font-bold text-[17px] px-4 p-1 rounded-[20px] hover:bg-[#6836fe] mb-7">
                            Submit
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BuildingProfile
