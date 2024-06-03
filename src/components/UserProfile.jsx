import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { userValidationSchema } from './utils/ValidationSchemas'; // Adjust the path as necessary

function UserProfile({ initialValues, onSubmit }) {
    const [buildingNames, setBuildingNames] = useState([]);

    useEffect(() => {
        const db = getDatabase();
        const buildingsRef = ref(db, 'buildings');

        onValue(buildingsRef, (snapshot) => {
            const data = snapshot.val();
            const buildingNamesList = data ? Object.values(data).map(building => building.buildingName) : [];
            setBuildingNames(buildingNamesList);
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
                    <section className='min-h-screen bg-[#191825] flex flex-col justify-center items-center'>
                        <div>
                            <div className='flex flex-col pl-[40px] text-white'>
                                <label>
                                    Name*
                                    <div>
                                        <ErrorMessage name="name" component="div" className="error" />
                                        <Field
                                            name="name"
                                            type="text"
                                            placeholder="Enter Your Name"
                                            className='w-[400px] border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5'
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
                                                className='w-[400px] border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5'
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
                                                required
                                                className='w-[400px] border-b-2 border-[#3F0071] bg-[#252437] mb-7 mr-5'
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
                                            name="officeNum"
                                            type="text"
                                            placeholder="Enter your office/flat number"
                                            className='w-[400px] border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5'
                                        />
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
                                                className='w-[400px] border-b-2 border-[#3F0071] bg-transparent mb-7 mr-5'
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
                                                className='bg-[#252437] border-[#3F0071] border-b-[2px] p-1 mb-7'
                                            >
                                                <option value="" disabled>Select your vehicle</option>
                                                <option value="Car">Car</option>
                                                <option value="Bike">Bike</option>
                                            </Field>
                                        </div>
                                    </label>
                                </div>
                                <button type="submit" className="bg-[#865DFF] font-bold text-[17px] px-4 p-1 rounded-[20px] hover:bg-[#6836fe] mb-7">
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
    user: PropTypes.object.isRequired,
    initialValues: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default UserProfile;
