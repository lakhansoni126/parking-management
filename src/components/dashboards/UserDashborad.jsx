import { useEffect, useState } from "react";
import Dashboard from "../DashboardCustom/Dashboard";

const UserDashboard = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUserData(JSON.parse(storedUser));
        }
    }, []);

    return (
        <>
            <Dashboard>
                <div>
                    <div className="px-4 sm:px-0">
                        <h3 className="text-base font-semibold leading-7 text-gray-900">
                            User Information
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                            Personal details and application.
                        </p>
                    </div>
                    <div className="mt-6 border-t border-gray-100">
                        <dl className="divide-y divide-gray-100">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Name
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {userData?.name || "N/A"}
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {userData?.email || "N/A"}
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Office Number
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {userData?.officeNum || "N/A"}
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Vehicle Number
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {userData?.vehicleNum || "N/A"}
                                </dd>
                            </div>
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium leading-6 text-gray-900">
                                    Vehicle Type
                                </dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                    {userData?.vehicleType || "N/A"}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </Dashboard>
        </>
    );
};

export default UserDashboard;
