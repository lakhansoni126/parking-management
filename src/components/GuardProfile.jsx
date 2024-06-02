import PropTypes from 'prop-types';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { guardValidationSchema } from './utils/ValidationSchemas'; // Adjust the path as necessary

function GuardProfile({ initialValues, onSubmit }) {
    const [buildingNames, setBuildingNames] = useState([]);

    useEffect(() => {
        const fetchBuildings = async () => {
            const db = getDatabase();
            const buildingsRef = ref(db, 'buildings');

            const unsubscribe = onValue(buildingsRef, (snapshot) => {
                const data = snapshot.val();
                const buildingNamesList = data ? Object.values(data).map(building => building.buildingName) : [];
                setBuildingNames(buildingNamesList);
            });

            return () => unsubscribe();
        };

        fetchBuildings();
    }, []);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={guardValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
                onSubmit(values);
                setSubmitting(false);
            }}
        >
            {() => (
                <Form>
                    <section className='min-h-screen bg-[#222831] flex flex-col justify-center items-center'>
                        <div>
                            <div className='flex flex-col pl-[40px] text-white'>
                                <label>
                                    Name*
                                    <div>
                                        <Field
                                            name="name"
                                            type="text"
                                            placeholder="Enter Your Name"
                                            className='w-[400px] border-b-2 border-[#393E46] bg-transparent mb-7 mr-5'
                                        />
                                        <ErrorMessage name="name" component="div" className="error" />
                                    </div>
                                </label>
                                <div>
                                    <label>
                                        Mobile number*
                                        <div>
                                            <Field
                                                name="contactInfo"
                                                type="text"
                                                placeholder="Mobile number"
                                                className='w-[400px] noscroll border-b-2 border-[#393E46] bg-transparent mb-7 mr-5'
                                            />
                                            <ErrorMessage name="contactInfo" component="div" className="error" />
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Building*
                                        <div>
                                            <Field
                                                as="select"
                                                name="building"
                                                required
                                                className='w-[400px] border-b-2 border-[#393E46] bg-[#222831] mb-7 mr-5'
                                            >
                                                <option value="" disabled>Select your building</option>
                                                {buildingNames.map((buildingName, index) => (
                                                    <option key={index} value={buildingName}>
                                                        {buildingName}
                                                    </option>
                                                ))}
                                            </Field>
                                            <ErrorMessage name="building" component="div" className="error" />
                                        </div>
                                    </label>
                                </div>
                                <label>
                                    Employee ID*
                                    <div>
                                        <Field
                                            name="employeeId"
                                            type="text"
                                            placeholder="Enter your employee ID"
                                            className='w-[400px] border-b-2 border-[#393E46] bg-transparent mb-7 mr-5'
                                        />
                                        <ErrorMessage name="employeeId" component="div" className="error" />
                                    </div>
                                </label>
                                <label>
                                    Floor*
                                    <div>
                                        <Field
                                            name="floor"
                                            type="text"
                                            placeholder="Enter your floor number"
                                            className='w-[400px] border-b-2 border-[#393E46] bg-transparent mb-7 mr-5'
                                        />
                                        <ErrorMessage name="floor" component="div" className="error" />
                                    </div>
                                </label>
                                <button type="submit" className="bg-[#FF5722] font-bold text-[17px] px-4 p-1 rounded-[20px] hover:bg-[#393E46] mb-7">
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

GuardProfile.propTypes = {
    user: PropTypes.object.isRequired,
    initialValues: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default GuardProfile;
