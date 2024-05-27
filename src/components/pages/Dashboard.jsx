import React, { useState } from 'react';

const Dashboard = () => {
    const [activeSection, setActiveSection] = useState('profile');

    return (
        <>
            <section className="h-screen bg-[#610094]">
                <div className="flex text-white">
                    <div className="h-screen w-[20vw] pt-5 border-r-2 border-r-[#150050] text-[18px] font-bold">
                        <div>
                            <button 
                                className="w-full border-[#150050] border-b-2 pb-5 align-text-center"
                                onClick={() => setActiveSection('profile')}
                            >
                                Profile
                            </button>
                        </div>
                        <div>
                            <button 
                                className="w-full border-[#150050] py-5 border-b-2 align-text-center"
                                onClick={() => setActiveSection('complain')}
                            >
                                Complain
                            </button>
                        </div>
                    </div>

                    {activeSection === 'profile' && (
                        <div id="User-info" className="w-[80vw] flex flex-col items-center">
                            <h1 className="font-bold text-[20px] mt-[120px]">User Information</h1>
                            <div className="flex gap-4 text-[20px] mt-10">
                                <h2 className="font-bold">Name</h2>
                                <h4>abc</h4>
                            </div>
                            <div className="flex gap-4 text-[20px] mt-10">
                                <h4 className="font-bold">email</h4>
                                <h4>abc</h4>
                            </div>
                            <div className="flex gap-4 text-[20px] mt-10">
                                <h4 className="font-bold">office Number</h4>
                                <h4>abc</h4>
                            </div>
                            <div className="flex gap-4 text-[20px] mt-10">
                                <h4 className="font-bold">vehicle Number</h4>
                                <h4>abc</h4>
                            </div>
                            <div className="flex gap-4 text-[20px] mt-10">
                                <h4 className="font-bold">vehicle Type</h4>
                                <h4>abc</h4>
                            </div>
                        </div>
                    )}

                    {activeSection === 'complain' && (
                        <div id="Complain" className="w-[80vw]">
                            <h1 className="font-bold text-[20px] pl-10 mt-[40px]">User Information</h1>
                            <ul className="mt-10">
                                <li className="py-5 pl-10 border-[#150050] border-t-2">PArking karne ke lakhhn nhi hai</li>
                                <li className="py-5 pl-10 border-[#150050] border-t-2">10 rs ki gadi</li>
                                <li className="py-5 pl-10 border-[#150050] border-t-2">Swift and baleno vale not allowed</li>
                                <li className="py-5 pl-10 border-[#150050] border-t-2">BHai teri polo 100 rupe me de dega ky</li>
                            </ul>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Dashboard;
