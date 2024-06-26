import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { Formik, Form } from "formik";
import { userValidationSchema } from "../utils/ValidationSchemas";
import InputBox from "../TextField/InputBox";
import SingleDropDown from "../DropDown/SingleDropDown";
import SubmitButton from "../Button/SubmitButton";
import { toast } from "react-toastify";
import BottomDesign from "../Design/BottomDesign";
import TopDesign from "../Design/TopDesign";
import HeadingSection from "../Design/HeadingSection";

const UserProfile = ({ initialValues, onSubmit }) => {
    const [buildingNames, setBuildingNames] = useState([]);
    const [allOffices, setAllOffices] = useState([]);
    const [filteredOffices, setFilteredOffices] = useState([]);
    const [selectedBuilding, setSelectedBuilding] = useState("");

    useEffect(() => {
        const db = getDatabase();
        const buildingsRef = ref(db, "buildings");

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

        const officesRef = ref(db, "office");
        onValue(officesRef, (snapshot) => {
            const data = snapshot.val();
            const officesList = data ? Object.values(data) : [];
            setAllOffices(officesList);
        });
    }, []);

    useEffect(() => {
        if (selectedBuilding) {
            const officesInSelectedBuilding = allOffices.filter(
                (office) => office.building === selectedBuilding
            );
            setFilteredOffices(officesInSelectedBuilding);
        } else {
            setFilteredOffices([]);
        }
    }, [selectedBuilding, allOffices]);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={userValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
                onSubmit(values);
                toast.success("User profile submitted.");
                setSubmitting(false);
            }}
        >
            {({ setFieldValue, values }) => (
                <Form>
                    <section
                        id="UserProfile"
                        className="min-h-screen  text-black flex flex-col justify-center items-center"
                    >
                        <TopDesign />
                        <div
                            id="guardProfileForm"
                            className="flex flex-col text-black">
                            <HeadingSection title="User Information" />

                            <InputBox
                                name="name"
                                label="Name"
                                placeholder="Enter Your Name"
                                type="text"
                            />
                            <InputBox
                                name="contactInfo"
                                label="Mobile number (optional)"
                                placeholder="Mobile number"
                                type="number"
                            />
                            <InputBox
                                name="vehicleNum"
                                label="Vehicle number*"
                                placeholder="Enter vehicle number"
                                type="text"
                            />

                            <SingleDropDown
                                name="building"
                                label="Building*"
                                placeholder="Select your building"
                                options={buildingNames}
                                onChange={(event) => {
                                    setSelectedBuilding(
                                        event?.[0]?.value || ""
                                    );
                                    setFieldValue(
                                        "building",
                                        event?.[0]?.value || ""
                                    );
                                }}
                            />

                            <SingleDropDown
                                name="officeNum"
                                label="Office/Flat*"
                                placeholder="Select your office/flat"
                                options={filteredOffices.flatMap((office) =>
                                    office.officeNum.map((num) => ({
                                        value: num,
                                        label: num,
                                    }))
                                )}
                                onChange={(event) => {
                                    setFieldValue(
                                        "officeNum",
                                        event?.[0]?.value || ""
                                    );
                                }}
                            />

                            <SingleDropDown
                                name="vehicleType"
                                label="Vehicle*"
                                placeholder="Select your vehicle"
                                options={[
                                    {
                                        value: "Bike",
                                        label: "Bike",
                                    },
                                    {
                                        value: "Car",
                                        label: "Car",
                                    },
                                ]}
                                onChange={(event) => {
                                    setFieldValue(
                                        "vehicleType",
                                        event?.[0]?.value || ""
                                    );
                                }}
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

export default UserProfile;
