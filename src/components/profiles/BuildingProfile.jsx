import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { buildingValidationSchema } from '../utils/ValidationSchemas'; // Adjust the path as necessary

function BuildingProfile({ initialValues, onSubmit }) {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={buildingValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
                onSubmit(values);
                setSubmitting(false);
            }}
        >
            {() => (
                <Form>
                    <section className='w-300 min-h-screen bg-[#222831] flex flex-col justify-center items-center'>
                        <h2 className='text-[#EEEEEE] font-bold  text-[20px] text-center mb-10'>Building Information</h2>
                        <div>
                            <div className='flex flex-col text-white'>
                                <label>
                                    Building Name*
                                    <ErrorMessage name="buildingName" component="div" className="error" />
                                    <div>
                                        <Field
                                            name="buildingName"
                                            type="text"
                                            placeholder="Building Name"
                                            className='w-[400px] border-b-2 border-[#DC5F00] bg-transparent mb-7 mr-5'
                                        />
                                    </div>
                                </label>
                                <label>
                                    Mobile number*
                                    <ErrorMessage name="contactInfo" component="div" className="error" />
                                    <div>
                                        <Field
                                            name="contactInfo"
                                            type="number"
                                            placeholder="Mobile number"
                                            className='w-[400px] noscroll border-b-2 border-[#DC5F00] bg-transparent mb-7 mr-5'
                                        />
                                    </div>
                                </label>
                                <label>
                                    Alternate number*
                                    <ErrorMessage name="altContactInfo" component="div" className="error" />
                                    <div>
                                        <Field
                                            name="altContactInfo"
                                            type="number"
                                            placeholder="Alternate number"
                                            className='w-[400px] noscroll border-b-2 border-[#DC5F00] bg-transparent mb-7 mr-5'
                                        />
                                    </div>
                                </label>
                                <label>
                                    Full Address*
                                    <ErrorMessage name="address" component="div" className="error" />
                                    <div>
                                        <Field
                                            name="address"
                                            type="text"
                                            placeholder="Enter your address"
                                            className='w-[400px] border-b-2 border-[#DC5F00] bg-transparent mb-7 mr-5'
                                        />
                                    </div>
                                </label>
                                <label>
                                    City*
                                    <ErrorMessage name="city" component="div" className="error" />
                                    <div>
                                        <Field
                                            name="city"
                                            type="text"
                                            placeholder="City"
                                            className='w-[400px] border-b-2 border-[#DC5F00] bg-transparent mb-7 mr-5'
                                        />
                                    </div>
                                </label>
                                <label>
                                    State*
                                    <ErrorMessage name="state" component="div" className="error" />
                                    <div>
                                        <Field
                                            name="state"
                                            type="text"
                                            placeholder="State"
                                            className='w-[400px] border-b-2 border-[#DC5F00] bg-transparent mb-7 mr-5'
                                        />
                                    </div>
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
}

BuildingProfile.propTypes = {
    initialValues: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default BuildingProfile;
