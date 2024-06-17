import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { officeValidationSchema } from '../utils/ValidationSchemas'; // Adjust the path as necessary

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
    const parseOfficeNumbers = (officeNum) => {
        return officeNum.split(/\s*,\s*|\s+/).map(num => num.trim()).filter(num => num);
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={officeValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
                values.officeNum = parseOfficeNumbers(values.officeNum);
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
                                    <div className='mb-7'>
                                        <Field
                                            name="officeName"
                                            type="text"
                                            placeholder="Enter Office Name"
                                            className='w-[400px] border-b-2 border-[#DC5F00] bg-transparent  mr-5'
                                        />
                                        <ErrorMessage name="officeName" component="div" className="error text-red-500" />
                                    </div>
                                </label>
                                <label>
                                    Office Number*
                                    <div className='mb-7'>
                                        <Field
                                            name="officeNum"
                                            type="text"
                                            placeholder="Enter Office Number"
                                            className='w-[400px] border-b-2 border-[#DC5F00] bg-transparent  mr-5'
                                        />
                                        <ErrorMessage name="officeNum" component="div" className="error text-red-500" />
                                    </div>
                                </label>
                                <label>
                                    Contact Number*
                                    <div className='mb-7'>
                                        <Field
                                            name="contactInfo"
                                            type="text"
                                            placeholder="Enter Contact Number"
                                            className='w-[400px] border-b-2 border-[#DC5F00] bg-transparent  mr-5'
                                        />
                                        <ErrorMessage name="contactInfo" component="div" className="error text-red-500" />
                                    </div>
                                </label>
                                <label>
                                    Alternate Contact Number
                                    <div className='mb-7'>
                                        <Field
                                            name="altContactInfo"
                                            type="text"
                                            placeholder="Enter Alternate Contact Number"
                                            className='w-[400px] border-b-2 border-[#DC5F00] bg-transparent  mr-5'
                                        />
                                        <ErrorMessage name="altContactInfo" component="div" className="error text-red-500" />
                                    </div>
                                </label>

                                <label>
                                    Building*
                                    <div className='mb-7'>
                                        <Field
                                            as="select"
                                            name="building"

                                            className='w-[400px] border-b-2 border-[#DC5F00] p-2 bg-[#222831]  mr-5'
                                        >
                                            <option value="" disabled>Select your building</option>
                                            {buildingNames.map((buildingName, index) => (
                                                <option key={index} value={buildingName}>
                                                    {buildingName}
                                                </option>
                                            ))}
                                        </Field>
                                        <ErrorMessage name="building" component="div" className="error text-red-500" />
                                    </div>
                                </label>

                                <button type="submit" className="bg-[#DC5F00] font-bold text-[17px] px-4 p-1 rounded-[20px] hover:bg-[#686D76] ">
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
