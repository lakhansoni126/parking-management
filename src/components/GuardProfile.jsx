import PropTypes from 'prop-types';
import { getDatabase, ref, onValue } from 'firebase/database';
import { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { guardValidationSchema } from './utils/ValidationSchemas';

function GuardProfile({ initialValues, onSubmit }) {
    const [buildingNames, setBuildingNames] = useState([]);

    useEffect(() => {
        const fetchBuildings = async () => {
            const db = getDatabase();
            const buildingsRef = ref(db, 'buildings');

            const buildings = onValue(buildingsRef, (snapshot) => {
                const data = snapshot.val();
                const buildingNamesList = data ? Object.values(data).map(building => building.buildingName) : [];
                setBuildingNames(buildingNamesList);
            });

            return () => buildings();
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
                    <section id='guardProfile' className='min-h-screen bg-[#222831] flex flex-col justify-center items-center'>
                        <div>
                            <div className='flex flex-col  text-white'>
                                <label>
                                    Name*
                                    <ErrorMessage name="name" component="div" className="error" />
                                    <div>
                                        <Field
                                            name="name"
                                            type="text"
                                            placeholder="Enter Your Name"
                                            className='w-[400px] border-b-2 border-[#393E46] bg-transparent mb-7 mr-5'
                                        />
                                    </div>
                                </label>
                                <div>
                                    <label>
                                        Mobile number*
                                        <ErrorMessage name="contactInfo" component="div" className="error" />
                                        <div>
                                            <Field
                                                name="contactInfo"
                                                type="text"
                                                placeholder="Mobile number"
                                                className='w-[400px] noscroll border-b-2 border-[#393E46] bg-transparent mb-7 mr-5'
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
                                                className='w-[400px] border-b-2 border-[#393E46] bg-[#222831] mb-7 mr-5'
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
                                    Employee ID*
                                    <ErrorMessage name="employeeId" component="div" className="error" />
                                    <div>
                                        <Field
                                            name="employeeId"
                                            type="text"
                                            placeholder="Enter your employee ID"
                                            className='w-[400px] border-b-2 border-[#393E46] bg-transparent mb-7 mr-5'
                                        />
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
    initialValues: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default GuardProfile;
