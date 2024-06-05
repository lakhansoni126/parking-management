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
                    <section id='OfficeProfile' className='min-h-screen bg-[#222831] flex flex-col justify-center items-center'>
                        <div>
                            <div className='w-300e w-300 flex flex-col text-[#EEEEEE]'>
                            <h2 className='text-[#EEEEEE] font-bold  text-[20px] text-center mb-10'>Office Information</h2>
                
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
                                <div>

                                    Building*
                                </div>
                                    <ErrorMessage name="building" component="div" className="error" />
                                    <Field
                                        as="select"
                                        name="building"
                                      
                                        className='w-[400px] border-b-2 border-[#DC5F00] p-2 bg-[#222831] mb-7 mr-5'
                                    >
                                    <div>

                                        <option value="" disabled>Select your building</option>
                                        {buildingNames.map((buildingName, index) => (
                                            <option key={index} value={buildingName}>
                                                {buildingName}
                                            </option>
                                        ))}
                                    </div>
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
