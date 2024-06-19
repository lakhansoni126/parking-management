import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { officeValidationSchema } from "../utils/ValidationSchemas"; // Adjust the path as necessary

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
                ? Object.values(data).map((building) => building.buildingName)
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
            {() => (
                <Form>
                    <section
                        id="OfficeProfile"
                        className="min-h-screen flex flex-col justify-center items-center"
                    >
                        <div
                            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                            aria-hidden="true"
                        >
                            <div
                                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                                style={{
                                    clipPath:
                                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                                }}
                            />
                        </div>
                        <div>
                            <div className="w-300e w-300 flex flex-col text-black">
                                <h2 className="text-orange-500 font-bold text-[40px] text-center mb-10">
                                    Office Information
                                </h2>

                                <label>
                                    Building*
                                    <div className="mb-7">
                                        <Field
                                            as="select"
                                            name="building"
                                            className="w-[400px] border-b-2 border-[#DC5F00] p-2 bg-[#222831]  mr-5"
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
                                            className="error text-red-500"
                                        />
                                    </div>
                                </label>
                                <label>
                                    Office Name*
                                    <div className="mb-7">
                                        <Field
                                            name="officeName"
                                            type="text"
                                            placeholder="Enter Office Name"
                                            className="w-[400px] border-b-2 border-[#DC5F00] bg-transparent  mr-5"
                                        />
                                        <ErrorMessage
                                            name="officeName"
                                            component="div"
                                            className="error text-red-500"
                                        />
                                    </div>
                                </label>
                                <label>
                                    Office Number*
                                    <div className="mb-7">
                                        <Field
                                            name="officeNum"
                                            type="text"
                                            placeholder="Enter Office Number"
                                            className="w-[400px] border-b-2 border-[#DC5F00] bg-transparent  mr-5"
                                        />
                                        <ErrorMessage
                                            name="officeNum"
                                            component="div"
                                            className="error text-red-500"
                                        />
                                    </div>
                                </label>
                                <label>
                                    Contact Number*
                                    <div className="mb-7">
                                        <Field
                                            name="contactInfo"
                                            type="text"
                                            placeholder="Enter Contact Number"
                                            className="w-[400px] border-b-2 border-[#DC5F00] bg-transparent  mr-5"
                                        />
                                        <ErrorMessage
                                            name="contactInfo"
                                            component="div"
                                            className="error text-red-500"
                                        />
                                    </div>
                                </label>
                                <label>
                                    Alternate Contact Number
                                    <div className="mb-7">
                                        <Field
                                            name="altContactInfo"
                                            type="text"
                                            placeholder="Enter Alternate Contact Number"
                                            className="w-[400px] border-b-2 border-[#DC5F00] bg-transparent  mr-5"
                                        />
                                        <ErrorMessage
                                            name="altContactInfo"
                                            component="div"
                                            className="error text-red-500"
                                        />
                                    </div>
                                </label>

                                <button
                                    type="submit"
                                    className="bg-[#DC5F00] font-bold text-[17px] px-4 p-1 rounded-[20px] hover:bg-[#686D76] "
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                        <div
                            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                            aria-hidden="true"
                        >
                            <div
                                className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                                style={{
                                    clipPath:
                                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                                }}
                            />
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
