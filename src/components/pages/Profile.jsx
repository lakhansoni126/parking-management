import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ref, set } from 'firebase/database';
import { db } from '../../firebase';

function Profile() {
    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state.user;
    const uid = location.state.uid

    console.log(location)
    const [formData, setFormData] = useState({
        name: '',
        uid: uid,
        contactInfo: '',
        email: user.email,
        officeNum: '',
        vehicleNum: '',
        vehicleType: ""
    });

    let role = "guard";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await set(ref(db, `${role}/` + uid), formData);
            navigate('/');
        } catch (error) {
            console.error('Error saving data to Firebase Realtime Database', error);
        }
    };

    return (
        <>
            <section className='min-h-screen bg-[#191825] flex flex-col justify-center items-center'>
                <div>
                    <div className='flex flex-col pl-[40px] text-white'>
                        <label>
                            Name
                            <div>
                                <input
                                    onChange={handleChange}
                                    value={formData.name}
                                    name="name"
                                    className='w-[400px] border-b-2 border-[#3F0071] bg-transparent my-5 mr-5 mb-3'
                                    type="text"
                                    placeholder={user.displayName}
                                />
                            </div>
                        </label>
                        <div>
                            <label>
                                Mobile number
                                <div>
                                    <input
                                        onChange={handleChange}
                                        value={formData.contactInfo}
                                        name="mn"
                                        className='w-[400px] noscroll border-b-2 border-[#3F0071] bg-transparent my-5 mr-5 mb-3'
                                        type="number"
                                        placeholder="mobile number"
                                    />
                                </div>
                            </label>
                        </div>
                        <label>
                            Office/Flat
                            <div>
                                <input
                                    onChange={handleChange}
                                    value={formData.office}
                                    name="office"
                                    className='w-[400px] border-b-2 border-[#3F0071] bg-transparent my-5 mr-5 mb-3'
                                    type="text"
                                    placeholder="Enter your office/flat number"
                                />
                            </div>
                        </label>

                        <div>
                            <label>
                                Vehicle number
                                <div>
                                    <input
                                        onChange={handleChange}
                                        value={formData.vehicleNum}
                                        name="vn"
                                        className='w-[400px] border-b-2 border-[#3F0071] bg-transparent my-5 mr-5 mb-3'
                                        type="text"
                                        placeholder="Enter vehicle number"
                                    />
                                </div>
                            </label>
                        </div>
                        <div>
                            <label>
                                Vehicle
                                <div>
                                    <select
                                        onChange={handleChange}
                                        value={formData.vehicleType}
                                        name="vt"
                                        className='bg-transparent border-[#3F0071] border-b-[2px] p-1 my-4'
                                    >
                                        <option value="" disabled>Select your vehicle</option>
                                        <option value="Car">Car</option>
                                        <option value="Bike">Bike</option>
                                    </select>
                                </div>
                            </label>
                        </div>
                        <button onClick={handleSubmit} className="bg-[#865DFF] font-bold text-[17px] px-4 p-1 rounded-[20px] hover:bg-[#6836fe] my-5">
                            Submit
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;
