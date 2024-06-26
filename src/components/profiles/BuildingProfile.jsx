import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { buildingValidationSchema } from "../utils/ValidationSchemas"; // Adjust the path as necessary
import BottomDesign from "../Design/BottomDesign";
import TopDesign from "../Design/TopDesign";
import SubmitButton from "../Button/SubmitButton";
import HeadingSection from "../Design/HeadingSection";
import InputBox from "../TextField/InputBox";

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
                        <div className="flex flex-col text-black"
                            id="guardProfileForm"
                        >
                            <HeadingSection title="Building Information" />

                            <InputBox
                                name="buildingName"
                                label="Building Name"
                                type="text"
                                placeholder=" Enter building Name"
                            />
                            <InputBox
                                name="contactInfo"
                                label="Mobile number"
                                placeholder="Enter mobile number"
                                type="number"
                            />

                            <InputBox
                                name="altContactInfo"
                                label="Alternate number"
                                placeholder="Enter Alternate number"
                                type="number"
                            />

                            <InputBox
                                name="addres"
                                label="Full Addres"
                                placeholder="Enter your address"
                                type="text"
                            />
                            <InputBox
                                name="city"
                                label="City"
                                placeholder="City"
                                type="text"
                            />

                            <InputBox
                                name="state"
                                label="State"
                                placeholder="State"
                                type="text"
                            />

                            <SubmitButton />
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
