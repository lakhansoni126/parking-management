import { useState, useEffect } from "react";
import UserDashborad from "../dashboards/UserDashborad";
import GuardDashboard from "../dashboards/GuardDeshboard";
import BuildingDashboard from "../dashboards/BuildingDashboard";
import OfficeDashboard from "../dashboards/OfficeDashboard";

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
            {userRole === "office" && <OfficeDashboard />}
        </>
    );
};

export default Dashboard;
