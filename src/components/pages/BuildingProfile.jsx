import React from 'react'

function BuildingProfile() {
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
                                    // onChange={handleChange}
                                    // value={formData.name}
                                    name="name"
                                    className='w-[400px] border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5 '
                                    type="text"
                                    // placeholder={user.displayName}
                                />
                            </div>
                        </label>
                        <div>
                            <label>
                                Mobile number*
                                <div>
                                    <input
                                        // onChange={handleChange}
                                        // value={formData.contactInfo}
                                        name="mn"
                                        className='w-[400px] noscroll border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5 '
                                        type="number"
                                        // placeholder="mobile number"
                                    />
                                </div>
                            </label>
                        </div>
                        <div>
                            <label>
                            Alternate number*
                                <div>
                                    <input
                                        // onChange={handleChange}
                                        // value={formData.contactInfo}
                                        name="mn"
                                        className='w-[400px] noscroll border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5 '
                                        type="number"
                                        // placeholder="mobile number"
                                    />
                                </div>
                            </label>
                        </div>

                        <label>
                            Full Address*
                            <div>
                                <input
                                    // onChange={handleChange}
                                    // value={formData.office}
                                    name="office"
                                    className='w-[400px] border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5 '
                                    type="text"
                                    // placeholder="Enter your office/flat number"
                                />
                            </div>
                        </label>
                        <label>
                         City*
                            <div>
                                <input
                                    // onChange={handleChange}
                                    // value={formData.office}
                                    name="office"
                                    className='w-[400px] border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5 '
                                    type="text"
                                    // placeholder="Enter your office/flat number"
                                />
                            </div>
                        </label>
                        <label>
                         State*
                            <div>
                                <input
                                    // onChange={handleChange}
                                    // value={formData.office}
                                    name="office"
                                    className='w-[400px] border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5 '
                                    type="text"
                                    // placeholder="Enter your office/flat number"
                                />
                            </div>
                        </label>

                            
                        <button  className="bg-[#865DFF] font-bold text-[17px] px-4 p-1 rounded-[20px] hover:bg-[#6836fe] mb-7">
                            Submit
                        </button>
                    </div>
                </div>
            </section> 
    </>
  )
}

export default BuildingProfile
