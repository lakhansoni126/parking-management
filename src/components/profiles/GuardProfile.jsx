import PropTypes from "prop-types";
import { getDatabase, ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { guardValidationSchema } from "../utils/ValidationSchemas";
import TopDesign from "../Design/TopDesign";
import BottomDesign from "../Design/BottomDesign";
import SubmitButton from "../Button/SubmitButton";
import HeadingSection from "../Design/HeadingSection";
import InputBox from "../TextField/InputBox";
import SingleDropDown from "../DropDown/SingleDropDown";

function GuardProfile({ initialValues, onSubmit }) {
    const [buildingNames, setBuildingNames] = useState([]);

    useEffect(() => {
        const fetchBuildings = async () => {
            const db = getDatabase();
            const buildingsRef = ref(db, "buildings");

            const buildings = onValue(buildingsRef, (snapshot) => {
                const data = snapshot.val();
                const buildingNamesList = data
                    ? Object.values(data).map((item) => {
                          return {
                              value: item.buildingName,
                              label: item.buildingName,
                          };
                      })
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
                toast.success("Guard profile submitted.");
                setSubmitting(false);
            }}
        >
            {({ setFieldValue, values }) => (
                <Form>
                    <section
                        id="guardProfile"
                        className="  min-h-screen flex flex-col justify-center items-center"
                    >
                        <TopDesign />

                        <div
                            id="guardProfileForm"
                            className="flex flex-col text-black "
                        >
                            <HeadingSection title="Guard Information" />

                            <InputBox
                                name="name"
                                label="Name"
                                placeholder="Enter Your Name"
                                type="text"
                            />

                            <InputBox
                                name="mobile"
                                label="Mobile"
                                placeholder="Mobile number"
                                type="text"
                            />

                            <SingleDropDown
                                name="building"
                                label="Building"
                                placeholder="Select your building"
                                options={buildingNames}
                                onChange={(event) => {
                                    setFieldValue(
                                        "building",
                                        event?.[0]?.value || ""
                                    );
                                }}
                            />
                            <InputBox
                                name="employeeId"
                                label="EmployeeID"
                                placeholder="Enter your employee ID"
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

GuardProfile.propTypes = {
    initialValues: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default GuardProfile;
