import { useState, useEffect } from "react";
import UserDashborad from "../UserDashborad";
import GuardDashboard from "../GuardDeshboard";
import BuildingDashboard from "../BuildingDashboard";

const Dashboard = () => {

    const [userRole, setUserRole] = useState(null);
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            setUserRole(userData.role);
        }
    }, []);

    return (
        <>
            {userRole === "users" && <UserDashborad />}
            {userRole === "guards" && <GuardDashboard />}
            {userRole === "buildings" && <BuildingDashboard />}
        </>
    );
};

export default Dashboard;
