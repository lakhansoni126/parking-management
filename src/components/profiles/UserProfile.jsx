import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { userValidationSchema } from '../utils/ValidationSchemas'; // Adjust the path as necessary

function UserProfile({ initialValues, onSubmit }) {
    const [buildingNames, setBuildingNames] = useState([]);
    const [officeNumbers, setOfficeNumbers] = useState([]);

    useEffect(() => {
        const db = getDatabase();
        const buildingsRef = ref(db, 'buildings');

        onValue(buildingsRef, (snapshot) => {
            const data = snapshot.val();
            const buildingNamesList = data ? Object.values(data).map(building => building.buildingName) : [];
            setBuildingNames(buildingNamesList);
        });

        const officesRef = ref(db, 'office');
        onValue(officesRef, (snapshot) => {
            const data = snapshot.val();
            const officeNumbersList = data ? Object.values(data).map(office => office.officeNumber) : [];
            setOfficeNumbers(officeNumbersList);
        });
    }, []);

    const handleVehicleNumChange = (event, setFieldValue) => {
        const upperCaseValue = event.target.value.toUpperCase();
        setFieldValue('vehicleNum', upperCaseValue);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={userValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
                onSubmit(values);
                setSubmitting(false);
            }}
        >
            {({ setFieldValue }) => (
                <Form>
                    <section id='UserProfile' className='min-h-screen bg-[#222831] flex flex-col justify-center items-center'>
                        <div>
                            <div className='flex flex-col text-[#EEEEEE]'>
                                <h2 className='text-[#EEEEEE] font-bold text-[20px] text-center mb-10'>User Information</h2>
                                <label>
                                    Name*
                                    <div>
                                        <ErrorMessage name="name" component="div" className="error" />
                                        <Field
                                            name="name"
                                            type="text"
                                            placeholder="Enter Your Name"
                                            className='w-[400px] border-b-2 border-[#DC5F00] bg-transparent mb-7 mr-5'
                                        />
                                    </div>
                                </label>
                                <div>
                                    <label>
                                        Mobile number (optional)
                                        <ErrorMessage name="contactInfo" component="div" className="error" />
                                        <div>
                                            <Field
                                                name="contactInfo"
                                                type="text"
                                                placeholder="Mobile number"
                                                className='w-[400px] border-b-2 border-[#DC5F00] bg-transparent mb-7 mr-5'
                                            />
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Building*
                                        <ErrorMessage name="building" component="div" className="error" />
                                        <div>
                                            <Field
                                                as="select"
                                                name="building"
                                                className='w-[400px] border-b-2 border-[#DC5F00] p-2 bg-[#252437] mb-7 mr-5'
                                            >
                                                <option value="" disabled>Select your building</option>
                                                {buildingNames.map((buildingName, index) => (
                                                    <option key={index} value={buildingName}>
                                                        {buildingName}
                                                    </option>
                                                ))}
                                            </Field>
                                        </div>
                                    </label>
                                </div>
                                <label>
                                    Office/Flat*
                                    <ErrorMessage name="officeNum" component="div" className="error" />
                                    <div>
                                        <Field
                                            as="select"
                                            name="officeNum"
                                            className='w-[400px] border-b-2 border-[#DC5F00] p-2 bg-[#252437] mb-7 mr-5'
                                        >
                                            <option value="" disabled>Select your office/flat</option>
                                            {officeNumbers.map((officeNumber, index) => (
                                                <option key={index} value={officeNumber}>
                                                    {officeNumber}
                                                </option>
                                            ))}
                                        </Field>
                                    </div>
                                </label>
                                <div>
                                    <label>
                                        Vehicle number*
                                        <ErrorMessage name="vehicleNum" component="div" className="error" />
                                        <div>
                                            <Field
                                                name="vehicleNum"
                                                type="text"
                                                placeholder="Enter vehicle number"
                                                className='w-[400px] border-b-2 border-[#DC5F00] bg-transparent mb-7 mr-5'
                                                onChange={(e) => handleVehicleNumChange(e, setFieldValue)}
                                            />
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Vehicle*
                                        <ErrorMessage name="vehicleType" component="div" className="error" />
                                        <div>
                                            <Field
                                                as="select"
                                                name="vehicleType"
                                                className='border-[#DC5F00] w-[400px] border-b-[2px] p-1 mb-7'
                                            >
                                                <option value="" disabled>Select your vehicle</option>
                                                <option value="Car">Car</option>
                                                <option value="Bike">Bike</option>
                                            </Field>
                                        </div>
                                    </label>
                                </div>
                                <button type="submit" className="bg-[#DC5F00] font-bold text-[17px] px-4 p-1 rounded-[20px] hover:bg-[#686D76] mb-7">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </section>
                </Form>
            )}
        </Formik>
    );
}

UserProfile.propTypes = {
    initialValues: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default UserProfile;