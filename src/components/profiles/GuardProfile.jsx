import PropTypes from "prop-types";
import { getDatabase, ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { guardValidationSchema } from "../utils/ValidationSchemas";
import TopDesign from "../Design/TopDesign";
import BottomDesign from "../Design/BottomDesign";
import SubmitButton from "../Button/SubmitButton";
import HeadingSection from "../Design/HeadingSection";

function GuardProfile({ initialValues, onSubmit }) {
    const [buildingNames, setBuildingNames] = useState([]);

    useEffect(() => {
        const fetchBuildings = async () => {
            const db = getDatabase();
            const buildingsRef = ref(db, "buildings");

            const buildings = onValue(buildingsRef, (snapshot) => {
                const data = snapshot.val();
                const buildingNamesList = data
                    ? Object.values(data).map(
                          (building) => building.buildingName
                      )
                    : [];
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
                    <section
                        id=""
                        className=" w-300 min-h-screen flex flex-col justify-center items-center"
                    >
                        <TopDesign />
                        <div>
                            <div
                                id="guardProfileForm"
                                className="flex flex-col  text-[#EEEEEE]"
                            >
                                <HeadingSection title="Guard Information" />

                                <label>
                                    Name*
                                    <div className="mb-7">
                                        <Field
                                            name="name"
                                            type="text"
                                            placeholder="Enter Your Name"
                                            className="w-[400px] border-b-2 border-[#DC5F00] p-1 bg-transparent  mr-5"
                                        />
                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="error"
                                        />
                                    </div>
                                </label>
                                <div>
                                    <label>
                                        Mobile number*
                                        <div className="mb-7">
                                            <Field
                                                name="contactInfo"
                                                type="text"
                                                placeholder="Mobile number"
                                                className="w-[400px] noscroll border-b-2 border-[#DC5F00] p-1 bg-transparent  mr-5"
                                            />
                                            <ErrorMessage
                                                name="contactInfo"
                                                component="div"
                                                className="error"
                                            />
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Building*
                                        <div className="mb-7">
                                            <Field
                                                as="select"
                                                name="building"
                                                className="w-[400px] border-b-2 border-[#DC5F00] p-1 bg-[#222831]  mr-5"
                                            >
                                                <option value="" disabled>
                                                    Select your building
                                                </option>
                                                {buildingNames.map(
                                                    (buildingName, index) => (
                                                        <option
                                                            key={index}
                                                            value={buildingName}
                                                        >
                                                            {buildingName}
                                                        </option>
                                                    )
                                                )}
                                            </Field>
                                            <ErrorMessage
                                                name="building"
                                                component="div"
                                                className="error"
                                            />
                                        </div>
                                    </label>
                                </div>
                                <label>
                                    Employee ID*
                                    <div className="mb-7">
                                        <Field
                                            name="employeeId"
                                            type="text"
                                            placeholder="Enter your employee ID"
                                            className="w-[400px] border-b-2 border-[#DC5F00] p-1 bg-transparent  mr-5"
                                        />
                                        <ErrorMessage
                                            name="employeeId"
                                            component="div"
                                            className="error"
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

GuardProfile.propTypes = {
    initialValues: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default GuardProfile;
