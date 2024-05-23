import React from 'react';

function Profile() {
    return (
        <>
            <label >Name<input type="text" /></label> <input type="text" />

            <label >Mobile number<input type="number" /></label>

            <label > Office/Flat <input type="text" /></label>

            <label >Vehicle
                <select name="Vehicle">
                    <option value="Car">Car</option>
                    <option value="Bike">Bike</option>
                </select></label>

            <label >Model<input type="text" /></label>
            
            <label >Vehicle number<input type="text" /></label>

        </>
    );
}

export default Profile;
