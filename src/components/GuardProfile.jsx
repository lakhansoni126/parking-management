import { useState } from 'react'

function GuardProfile() {
    const [formData, setFormData] = useState({
        name: '',
        contactInfo: '',
        employeeId: '',
        floor: '',
        uid: uid
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
                                    name="name"
                                    className='w-[400px] border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5 '
                                    type="text"
                                    placeholder={user.displayName}
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
                                        name="mn"
                                        className='w-[400px] noscroll border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5 '
                                        type="number"
                                        placeholder="mobile number"
                                    />
                                </div>
                            </label>
                        </div>

                        <label>
                            Employee ID*
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
                        <label>
                            Floor*
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


                        <button className="bg-[#865DFF] font-bold text-[17px] px-4 p-1 rounded-[20px] hover:bg-[#6836fe] mb-7">
                            Submit
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GuardProfile
