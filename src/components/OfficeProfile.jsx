import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { officeValidationSchema } from './utils/ValidationSchemas'; // Adjust the path as necessary

const OfficeProfile = ({ initialValues, onSubmit }) => {
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

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={officeValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
                onSubmit(values);
                setSubmitting(false);
            }}
        >
            {() => (
                <Form>
                    <section id='OfficeProfile' className='min-h-screen bg-[#373A40] flex flex-col justify-center items-center'>
                        <div>
                            <div className='flex flex-col text-[#EEEEEE]'>
                                <label>
                                    Office Name*
                                    <div>
                                        <ErrorMessage name="officeName" component="div" className="error" />
                                        <Field
                                            name="officeName"
                                            type="text"
                                            placeholder="Enter Office Name"
                                            className='w-[400px] border-b-2 border-[#DC5F00] bg-transparent mb-7 mr-5'
                                        />
                                    </div>
                                </label>
                                <label>
                                    Office Number*
                                    <div>
                                        <ErrorMessage name="officeNumber" component="div" className="error" />
                                        <Field
                                            name="officeNumber"
                                            type="text"
                                            placeholder="Enter Office Number"
                                            className='w-[400px] border-b-2 border-[#DC5F00] bg-transparent mb-7 mr-5'
                                        />
                                    </div>
                                </label>
                                <label>
                                    Contact Number*
                                    <div>
                                        <ErrorMessage name="contactNumber" component="div" className="error" />
                                        <Field
                                            name="contactNumber"
                                            type="text"
                                            placeholder="Enter Contact Number"
                                            className='w-[400px] border-b-2 border-[#DC5F00] bg-transparent mb-7 mr-5'
                                        />
                                    </div>
                                </label>
                                <label>
                                    Alternate Contact Number
                                    <div>
                                        <ErrorMessage name="altContactNumber" component="div" className="error" />
                                        <Field
                                            name="altContactNumber"
                                            type="text"
                                            placeholder="Enter Alternate Contact Number"
                                            className='w-[400px] border-b-2 border-[#DC5F00] bg-transparent mb-7 mr-5'
                                        />
                                    </div>
                                </label>

                                <label>
                                    Building*
                                    <ErrorMessage name="building" component="div" className="error" />
                                    <Field
                                        as="select"
                                        name="building"
                                        required
                                        className='w-[400px] border-b-2 border-[#DC5F00] p-2 bg-[#252437] mb-7 mr-5'
                                    >
                                        <option value="" disabled>Select your building</option>
                                        {buildingNames.map((buildingName, index) => (
                                            <option key={index} value={buildingName}>
                                                {buildingName}
                                            </option>
                                        ))}
                                    </Field>
                                </label>

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
};

OfficeProfile.propTypes = {
    initialValues: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default OfficeProfile;
