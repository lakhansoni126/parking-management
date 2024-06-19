import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { buildingValidationSchema } from "../utils/ValidationSchemas"; // Adjust the path as necessary
import BottomDesign from "../Design/BottomDesign";
import TopDesign from "../Design/TopDesign";
import SubmitButton from "../Button/SubmitButton";
import HeadingSection from "../Design/HeadingSection";

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
                    <section className="w-300 min-h-screen flex flex-col justify-center items-center">
                        <TopDesign />

                        <HeadingSection title="Building Information" />

                        <div>
                            <div className="flex flex-col text-black">
                                <label>
                                    Building Name*
                                    <div className="mb-7">
                                        <Field
                                            name="buildingName"
                                            type="text"
                                            placeholder="Building Name"
                                            className="w-[400px] border-b-2 border-[#DC5F00] bg-transparent  mr-5"
                                        />
                                        <ErrorMessage
                                            name="buildingName"
                                            component="div"
                                            className="error text-red-500"
                                        />
                                    </div>
                                </label>
                                <label>
                                    Mobile number*
                                    <div className="mb-7">
                                        <Field
                                            name="contactInfo"
                                            type="number"
                                            placeholder="Mobile number"
                                            className="w-[400px] noscroll border-b-2 border-[#DC5F00] bg-transparent  mr-5"
                                        />
                                        <ErrorMessage
                                            name="contactInfo"
                                            component="div"
                                            className="error text-red-500"
                                        />
                                    </div>
                                </label>
                                <label>
                                    Alternate number*
                                    <div className="mb-7">
                                        <Field
                                            name="altContactInfo"
                                            type="number"
                                            placeholder="Alternate number"
                                            className="w-[400px] noscroll border-b-2 border-[#DC5F00] bg-transparent  mr-5"
                                        />
                                        <ErrorMessage
                                            name="altContactInfo"
                                            component="div"
                                            className="error text-red-500"
                                        />
                                    </div>
                                </label>
                                <label>
                                    Full Address*
                                    <div className="mb-7">
                                        <Field
                                            name="address"
                                            type="text"
                                            placeholder="Enter your address"
                                            className="w-[400px] border-b-2 border-[#DC5F00] bg-transparent  mr-5"
                                        />
                                        <ErrorMessage
                                            name="address"
                                            component="div"
                                            className="error text-red-500"
                                        />
                                    </div>
                                </label>
                                <label>
                                    City*
                                    <div className="mb-7">
                                        <Field
                                            name="city"
                                            type="text"
                                            placeholder="City"
                                            className="w-[400px] border-b-2 border-[#DC5F00] bg-transparent  mr-5"
                                        />
                                        <ErrorMessage
                                            name="city"
                                            component="div"
                                            className="error text-red-500"
                                        />
                                    </div>
                                </label>
                                <label>
                                    State*
                                    <div className="mb-7">
                                        <Field
                                            name="state"
                                            type="text"
                                            placeholder="State"
                                            className="w-[400px] border-b-2 border-[#DC5F00] bg-transparent  mr-5"
                                        />
                                        <ErrorMessage
                                            name="state"
                                            component="div"
                                            className="error text-red-500"
                                        />
                                    </div>
                                </label>
                                <SubmitButton />
                            </div>
                        </div>
                        <BottomDesign />
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
