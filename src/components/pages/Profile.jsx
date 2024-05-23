import React from 'react';

function Profile() {
    return (
        <>
        <section className=' h-screen bg-[#191825] flex justify-center items-center'>

            <img src="" alt="" />
            <div className='flex flex-col text-white'>
            <label className=''>
                Name <br />
                <input className='bg- border-b-2 border-[#3F0071] bg-transparent my-5 mx-5' type="text" placeholder="Enter your name" />
                <input type="text" className='bg- border-b-2 border-[#3F0071] bg-transparent my-5 mx-5' placeholder="Enter another name" />
            </label>

            <label className=''>
                Mobile number
                <br />
                <input className='bg- border-b-2 border-[#3F0071] bg-transparent my-5 mx-5' type="number" placeholder="Enter your mobile number" />
            </label>

<div className='flex'>
            <label className=''>
                Office/Flat
                <br />
                <input className='bg- border-b-2 border-[#3F0071] bg-transparent my-5 mx-5' type="text" placeholder="Enter your office/flat number" />
            </label>

            <label className='mx-5'>
                Vehicle
                <br />
                <select className=' bg-transparent border-white border-b-[1px] p-1 my-5 ' name="Vehicle">
                    <option className=' bg-transparent  text-black' value="" disabled selected>Select your vehicle</option>
                    <option className=' bg-transparent  text-black' value="Car">Car</option>
                    <option className=' bg-transparent  text-black' value="Bike">Bike</option>
                </select>
            </label>
</div>

            <label className=''>
                Model
                <input className='bg- border-b-2 border-[#3F0071] bg-transparent my-5 mx-5' type="text" placeholder="Enter vehicle model" />
            </label>

            <label className=''>
                Vehicle number
                <input className='bg- border-b-2 border-[#3F0071] bg-transparent my-5 mx-5' type="text" placeholder="Enter vehicle number" />
            </label>
        </div>

        </section>
        </>
    );
}

export default Profile;
