import React, { useState } from 'react';

function Profile() {

    return (
        <>
            <section className='min-h-screen bg-[#191825] flex flex-col justify-center items-center'>
                <div>
                    <img className='invert w-32 rounded-full' src="../../../public/images/user.png" alt="" />
                </div>
                <div>
                    <div className='flex flex-col pl-[40px] text-white'>
                        <label className=''>
                            Name
                            <div>
                                <input className='w-[400px] bg- border-b-2 border-[#3F0071] bg-transparent my-5 mr-5 mb-3' type="text" placeholder="Enter your name" />
                              </div>
                        </label>
                        <div>
                            <label className=''>
                                Mobile number
                                <div>
                                    <input className='w-[400px] noscroll bg- border-b-2 border-[#3F0071] bg-transparent my-5 mr-5 mb-3' type="number" placeholder="Enter your mobile number" />
                                </div>
                            </label>
                        </div>
                            <label className=''>
                                Office/Flat
                                <div>
                                    <input className='w-[400px] bg- border-b-2 border-[#3F0071] bg-transparent my-5 mr-5 mb-3' type="text" placeholder="Enter your office/flat number" />
                                </div>
                            </label>
                        <div>
                            <label className=''>
                                Model
                                <div>
                                    <input className='w-[400px] bg- border-b-2 border-[#3F0071] bg-transparent my-5 mr-5 mb-3' type="text" placeholder="Enter vehicle model" />
                                </div>
                            </label>
                        </div>
                        <div>
                            <label className=''>
                                Vehicle number
                                <div>
                                    <input className='w-[400px] bg- border-b-2 border-[#3F0071] bg-transparent my-5 mr-5 mb-3' type="text" placeholder="Enter vehicle number" />
                                </div>
                            </label>
                        </div>
                        <div>

                            <label className=''>
                                Vehicle
                                <div>
                                    <select className='bg-transparent  border-[#3F0071] border-b-[2px] p-1 my-4' name="Vehicle">
                                        <option className='bg-transparent text-black' value="" disabled selected>Select your vehicle</option>
                                        <option className='bg-transparent text-black' value="Car">Car</option>
                                        <option className='bg-transparent text-black' value="Bike">Bike</option>
                                    </select>
                                </div>
                            </label>
                        </div>
                        <button className="bg-[#865DFF] font-bold text-[17px] px-4 p-1 rounded-[20px] hover:bg-[#6836fe] my-5">Submit</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;
