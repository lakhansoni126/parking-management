import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ref, set } from "firebase/database";
import { db } from "../../firebase.js";
import BuildingProfile from "../profiles/BuildingProfile";
import UserProfile from "../profiles/UserProfile";
import GuardProfile from "../profiles/GuardProfile";
import OfficeProfile from "../profiles/OfficeProfile.jsx";
import ChooseRole from "../ChooseRole";
import {
    userValidationSchema,
    guardValidationSchema,
    buildingValidationSchema,
    officeValidationSchema,
} from "../utils/ValidationSchemas";

function Profile() {
    const location = useLocation();
    const navigate = useNavigate();
    const user = location.state?.user;
    const uid = location.state?.uid;

    useEffect(() => {
        if (!user || !uid) {
            alert("Login properly.");
            navigate("/");
        }
    }, [user, uid, navigate]);
    const [role, setRole] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [formData, setFormData] = useState({
        buildingName: "",
        contactInfo: "",
        altContactInfo: "",
        address: "",
        city: "",
        state: "",
        uid: uid,
        email: user?.email,
        role: "",
        name: "",
        employeeId: "",
        floor: "",
        officeNum: "",
        vehicleNum: "",
        vehicleType: "",
        building: "",
        auth: "",
    });

    const handleSelectRole = (selectedRole) => {
        setRole(selectedRole);
        setFormData((prevData) => ({
            ...prevData,
            role: selectedRole,
            ...(selectedRole === "guards" && { auth: false }), // Add auth field only for guards
        }));
        setIsModalOpen(false);
    };

    const handleSubmit = async (values) => {
        try {
            const validFormData = Object.keys(values).reduce((acc, key) => {
                const value = values[key];
                if (
                    value !== undefined &&
                    value !== null &&
                    value !== "" &&
                    !key.includes(".") &&
                    !key.includes("#") &&
                    !key.includes("$") &&
                    !key.includes("/") &&
                    !key.includes("[") &&
                    !key.includes("]")
                ) {
                    acc[key] = value;
                }
                return acc;
            }, {});

            await set(ref(db, `${role}/` + uid), validFormData);
            localStorage.setItem("user", JSON.stringify(validFormData));
            navigate("/dashboard");
        } catch (error) {
            console.error(
                "Error saving data to Firebase Realtime Database",
                error
            );
        }
    };

    const renderForm = () => {
        switch (role) {
            case "users":
                return (
                    <UserProfile
                        validationSchema={userValidationSchema}
                        initialValues={formData}
                        onSubmit={handleSubmit}
                    />
                );
            case "guards":
                return (
                    <GuardProfile
                        validationSchema={guardValidationSchema}
                        initialValues={formData}
                        onSubmit={handleSubmit}
                    />
                );
            case "buildings":
                return (
                    <BuildingProfile
                        validationSchema={buildingValidationSchema}
                        initialValues={formData}
                        onSubmit={handleSubmit}
                    />
                );
            case "office":
                return (
                    <OfficeProfile
                        validationSchema={officeValidationSchema}
                        initialValues={formData}
                        onSubmit={handleSubmit}
                    />
                );
        }
    };

    return (
        <div>
            <ChooseRole open={isModalOpen} onSelectRole={handleSelectRole} />
            {role && renderForm()}
        </div>
    );
}

export default Profile;
