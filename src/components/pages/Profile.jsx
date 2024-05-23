import React, { useState } from 'react';

function Profile() {

    return (
        <>
            <section className='min-h-screen bg-[#191825] flex flex-col justify-center items-center'>
                <div>
                    <img className='invert w-40 rounded-full' src="../../../public/images/user.png" alt="" />
                </div>
                <div>
                    <div className='flex flex-col pl-[40px] text-white'>
                        <label className=''>
                            Name
                            <div>
                                <input className='bg- border-b-2 border-[#3F0071] bg-transparent my-5 mr-5 mb-5' type="text" placeholder="Enter your name" />
                                <input type="text" className='bg- border-b-2 border-[#3F0071] bg-transparent my-5 mr-5 mb-5' placeholder="Enter another name" />
                            </div>
                        </label>
                        <div>
                            <label className=''>
                                Mobile number
                                <div>
                                    <input className='noscroll bg- border-b-2 border-[#3F0071] bg-transparent my-5 mr-5 mb-5' type="number" placeholder="Enter your mobile number" />
                                </div>
                            </label>
                        </div>
                        <div className='flex'>
                            <label className=''>
                                Office/Flat
                                <div>
                                    <input className='bg- border-b-2 border-[#3F0071] bg-transparent my-5 mr-5 mb-5' type="text" placeholder="Enter your office/flat number" />
                                </div>
                            </label>
                            <label className='mr-5 mb-5'>
                                Vehicle
                                <div>
                                    <input className='bg- border-b-2 border-[#3F0071] bg-transparent my-5 mr-5 mb-5' type="text" placeholder="RTO IN UPPERCASE"  />
                                </div>
                            </label>
                        </div>
                        <div>
                            <label className=''>
                                Model
                                <div>
                                    <input className='bg- border-b-2 border-[#3F0071] bg-transparent my-5 mr-5 mb-5' type="text" placeholder="Enter vehicle model" />
                                </div>
                            </label>
                        </div>
                        <div>
                            <label className=''>
                                Vehicle number
                                <div>
                                    <input className='bg- border-b-2 border-[#3F0071] bg-transparent my-5 mr-5 mb-5' type="text" placeholder="Enter vehicle number" />
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
