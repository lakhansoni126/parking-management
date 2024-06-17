import PropTypes from "prop-types";
import { useState, useEffect, useCallback } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Dropdown from "react-dropdown-select";
import { userValidationSchema } from "../utils/ValidationSchemas";

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
            console.log("Buildings data:", data); // Inspect buildings data
            const buildingNamesList = data
                ? Object.values(data).map((building) => building.buildingName)
                : [];
            setBuildingNames(buildingNamesList);
        });

        const officesRef = ref(db, "office");
        onValue(officesRef, (snapshot) => {
            const data = snapshot.val();
            console.log("Offices data:", data); // Inspect offices data
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

    const handleBuildingChange = (event, setFieldValue) => {
        const buildingName = event.target.value;
        setSelectedBuilding(buildingName);
        setFieldValue("building", buildingName);
    };

    const handleVehicleNumChange = useCallback((e, setFieldValue) => {
        const uppercaseValue = e.target.value.toUpperCase();
        setFieldValue("vehicleNum", uppercaseValue);
    }, []);

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={userValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
                onSubmit(values);
                setSubmitting(false);
            }}
        >
            {({ setFieldValue }) => (
                <Form>
                    <section
                        id="UserProfile"
                        className="min-h-screen bg-[#222831] text-[#EEEEEE] flex flex-col justify-center items-center"
                    >
                        <div>
                            <div className="flex flex-col text-[#EEEEEE]">
                                <h2 className="text-[#EEEEEE] font-bold text-[20px] text-center mb-10">
                                    User Information
                                </h2>
                                <label>
                                    Name*
                                    <div className="mb-7">
                                        <Field
                                            name="name"
                                            type="text"
                                            placeholder="Enter Your Name"
                                            className="w-[400px] border-b-2 border-[#DC5F00] bg-transparent "
                                        />

                                        <ErrorMessage
                                            name="name"
                                            component="div"
                                            className="error text-red-500 text-bold"
                                        />
                                    </div>
                                </label>
                                <div>
                                    <label>
                                        Mobile number (optional)
                                        <div className="mb-7">
                                            <Field
                                                name="contactInfo"
                                                type="text"
                                                placeholder="Mobile number"
                                                className="w-[400px] border-b-2 border-[#DC5F00] bg-transparent  "
                                            />
                                            <ErrorMessage
                                                name="contactInfo"
                                                component="div"
                                                className="error text-red-500 text-bold"
                                            />
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Building*
                                        <div className="mb-7">
                                            <select
                                                name="building"
                                                className="w-[400px] border-b-2 border-[#DC5F00]  p-2 bg-[#252437]  "
                                                onChange={(event) =>
                                                    handleBuildingChange(
                                                        event,
                                                        setFieldValue
                                                    )
                                                }
                                            >
                                                <option value="">
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
                                            </select>
                                            <ErrorMessage
                                                name="building"
                                                component="div"
                                                className="error text-red-500 text-bold"
                                            />
                                        </div>
                                    </label>
                                </div>
                                <label>
                                    Office/Flat*
                                    <div
                                        className="mb-7"
                                        style={{
                                            borderBottom: "2px solid #DC5F00",
                                        }}
                                    >
                                        <Dropdown
                                            options={filteredOffices.map(
                                                (office) => ({
                                                    value: office.officeNum,
                                                    label: office.officeNum,
                                                })
                                            )}
                                            placeholder="Select your office/flat"
                                            onChange={(selectedOption) =>
                                                setFieldValue(
                                                    "officeNum",
                                                    selectedOption?.[0]
                                                        ?.value || ""
                                                )
                                            }
                                            style={{ border: "none" }}
                                        />
                                        <ErrorMessage
                                            name="officeNum"
                                            component="div"
                                            className="error text-red-500 text-bold"
                                        />
                                    </div>
                                </label>

                                <div>
                                    <label>
                                        Vehicle number*
                                        <div className="mb-7">
                                            <Field
                                                name="vehicleNum"
                                                type="text"
                                                placeholder="Enter vehicle number"
                                                onChange={(e) =>
                                                    handleVehicleNumChange(
                                                        e,
                                                        setFieldValue
                                                    )
                                                }
                                                className="w-[400px] border-b-2 border-[#DC5F00] bg-transparent  "
                                            />
                                            <ErrorMessage
                                                name="vehicleNum"
                                                component="div"
                                                className="error text-red-500 text-bold"
                                            />
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        Vehicle*
                                        <div className="mb-7">
                                            <Field
                                                as="select"
                                                name="vehicleType"
                                                className="border-[#DC5F00] w-[400px] border-b-[2px] p-1 "
                                            >
                                                <option value="" disabled>
                                                    Select your vehicle
                                                </option>
                                                <option value="Car">Car</option>
                                                <option value="Bike">
                                                    Bike
                                                </option>
                                            </Field>
                                            <ErrorMessage
                                                name="vehicleType"
                                                component="div"
                                                className="error text-red-500 text-bold"
                                            />
                                        </div>
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-[#DC5F00] font-bold text-[17px] px-4 p-1 rounded-[20px] hover:bg-[#686D76] "
                                >
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

UserProfile.propTypes = {
    initialValues: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default UserProfile;
