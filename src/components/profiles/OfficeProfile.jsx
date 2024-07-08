import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { officeValidationSchema } from "../utils/ValidationSchemas"; // Adjust the path as necessary
import TopDesign from "../Design/TopDesign";
import HeadingSection from "../Design/HeadingSection";
import SingleDropDown from "../DropDown/SingleDropDown";
import InputBox from "../TextField/InputBox";
import SubmitButton from "../Button/SubmitButton";
import BottomDesign from "../Design/BottomDesign";

const parseOfficeNumbers = (officeNum) => {
    if (typeof officeNum === "string") {
        return officeNum
            .split(/\s*,\s*|\s+/)
            .map((num) => num.trim())
            .filter((num) => num);
    } else if (Array.isArray(officeNum)) {
        return officeNum
            .map((num) => num.toString().trim())
            .filter((num) => num);
    } else {
        console.error("officeNum is neither a string nor an array:", officeNum);
        return [];
    }
};
const OfficeProfile = ({ initialValues, onSubmit }) => {
    const [buildingNames, setBuildingNames] = useState([]);
    const [offices, setOffices] = useState([]);

    useEffect(() => {
        const db = getDatabase();
        const buildingsRef = ref(db, "buildings");
        const officesRef = ref(db, "office");

        onValue(buildingsRef, (snapshot) => {
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

        onValue(officesRef, (snapshot) => {
            const data = snapshot.val();

            setOffices(data || {});
        });
    }, []);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={officeValidationSchema(
                buildingNames,
                offices,
                parseOfficeNumbers
            )}
            onSubmit={(values, { setSubmitting }) => {
                values.officeNum = parseOfficeNumbers(values.officeNum);
                onSubmit(values);
                setSubmitting(false);
            }}
        >
            {({ setFieldValue, value }) => (
                <Form>
                    <section
                        id="UserProfile"
                        className="min-h-screen flex flex-col justify-center items-center"
                    >
                        <TopDesign />

                        <div
                            id="guardProfileForm"
                            className=" flex flex-col text-black"
                        >
                            <HeadingSection title="Office Information" />


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
                                name="officeName"
                                label="Office Name"
                                type="text"
                                placeholder="Enter your Office Name"
                            />
                            <InputBox
                                name="officeNum"
                                label="Office Number"
                                placeholder="Enter Office Number"
                                type="text"
                            />
                            <InputBox
                                name="contactInfo"
                                label="Contact Number"
                                type="text"
                                placeholder="Enter Contact Number"
                            />
                            <InputBox
                                name="AltContactInfo"
                                label="Alternate Contact Number"
                                placeholder="Enter Alternate Contact"
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
};

OfficeProfile.propTypes = {
    initialValues: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default OfficeProfile;
