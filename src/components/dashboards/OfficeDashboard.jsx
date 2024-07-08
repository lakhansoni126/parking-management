import { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import Dashboard from "../DashboardCustom/Dashboard";

const OfficeDashboard = () => {
    const [users, setUsers] = useState([]);
    const [officeNumber, setOfficeNumber] = useState(null);
    const [buildingName, setBuildingName] = useState(null);

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("user"));

        const storedOfficeNumber = loggedInUser?.officeNum;
        const storedBuildingName = loggedInUser?.building;

        if (storedOfficeNumber !== officeNumber) {
            setOfficeNumber(storedOfficeNumber);
        }
        if (storedBuildingName !== buildingName) {
            setBuildingName(storedBuildingName);
        }
    }, []);

    useEffect(() => {
        if (!officeNumber || !buildingName) return;

        const db = getDatabase();
        const usersRef = ref(db, "users");

        onValue(usersRef, (snapshot) => {
            const data = snapshot.val();
            const usersList = data ? Object.values(data) : [];

            const filteredUsers = usersList.filter((user) => {
                return (
                    officeNumber.includes(user.officeNum) ||
                    user.building === buildingName
                );
            });

            setUsers(filteredUsers);
        });
    }, [officeNumber, buildingName]);

    return (
        <Dashboard>
            <div className="text-[black]">
                <h1 className="text-5xl font-bold mb-20 px-4 text-center">
                    Office Dashboard
                </h1>
                <div className="flex flex-wrap justify-center gap-6">
                    {users.map((user, index) => (
                        <div
                            key={index}
                            style={{
                                boxShadow:
                                    "0px 0px 10px rgb(230 153 255 / 74%)",
                            }}
                            className="relative  bg-[#e9d8ff63] rounded-lg w-[300px] shadow-md p-6"
                        >
                            <p className="text-sm text-[#222831] mr-2 mb-5">
                                <strong>Name:</strong> {user?.name}
                            </p>
                            <p className="text-sm text-[#222831] mr-2 mb-5">
                                <strong>Office Number :</strong>{" "}
                                {Array.isArray(user.officeNum)
                                    ? user.officeNum.join(", ")
                                    : user.officeNum}
                            </p>

                            <p className="text-sm text-[#222831] mr-2 mb-5">
                                <strong>Contact Number:</strong>{" "}
                                {user?.contactInfo}
                            </p>
                            <p className="text-sm text-[#222831] mr-2 mb-5">
                                <strong>Vehicle Number:</strong>{" "}
                                {user?.vehicleNum}
                            </p>
                            <p className="text-sm text-[#222831] mr-2 mb-5">
                                <strong>Vehicle Type:</strong>{" "}
                                {user?.vehicleType}
                            </p>
                        </div>
                    ))}
                </div>{" "}
            </div>
        </Dashboard>
    );
};

export default OfficeDashboard;
