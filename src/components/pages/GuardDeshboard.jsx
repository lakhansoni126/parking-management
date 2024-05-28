import React, { useState, useEffect } from "react";

function GuardDashboard() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  return (
    <section className="h-screen min-h-[600px] bg-[#610094]">
      <div className="flex text-white">
        <div className="h-screen min-h-[600px] pt-10 border-r-2 border-r-[#150050] text-[18px] font-bold">
          <div id="User-info" className="w-[20vw] flex flex-col ">
            <h1 className="font-bold text-[20px] text-center ">Guard Information</h1>
            <div className="flex gap-4 justify-between p-2 text-[15px] ">
              <h2 className="font-bold">Name:</h2>
              <h4>{userData ? userData.name : "N/A"}</h4>
            </div>
            <div className="flex gap-4 justify-between p-2 text-[15px] ">
              <h4 className="font-bold">Email:</h4>
              <h4>{userData ? userData.email : "N/A"}</h4>
            </div>
            <div className="flex gap-4 justify-between p-2 text-[15px] ">
              <h4 className="font-bold">Office Number:</h4>
              <h4>{userData ? userData.officeNum : "N/A"}</h4>
            </div>
            <div className="flex gap-4 justify-between p-2 text-[15px] ">
              <h4 className="font-bold">Vehicle Number:</h4>
              <h4>{userData ? userData.vehicleNum : "N/A"}</h4>
            </div>
            <div className="flex gap-4 justify-between p-2 text-[15px] ">
              <h4 className="font-bold">Vehicle Type:</h4>
              <h4>{userData ? userData.vehicleType : "N/A"}</h4>
            </div>
          </div>
        </div>
        <div id="Complain" className="w-[80vw]">
          <h1 className="font-bold text-[15px] pl-10 mt-[40px]">Complaints</h1>
          <div className="flex flex-row gap-2 justify-center">
            <input className="bg-[#ffffff45] p-2 w-[40vw] rounded-sm" placeholder="Search..." type="text" />
            <button className="bg-orange-500 px-7 rounded-sm py-2">Search</button>
          </div>
          <div className="flex justify-center">
            <div className="ml-10 w-[50vw] mt-5">
              <div className="flex justify-between mt-5 border-b-2 border-[#150050] font-bold">
                <h2>Name:</h2>
                <h2>Hemant Soni</h2>
              </div>
              <div className="flex justify-between mt-5 border-b-2 border-[#150050] font-bold">
                <h2>Vehicle:</h2>
                <h2>RJ12cb350</h2>
              </div>
              <div className="flex justify-between mt-5 border-b-2 border-[#150050] font-bold">
                <h2>Office/apartment Floor:</h2>
                <h2>Office/apartment Floor</h2>
              </div>
              <div className="flex justify-between mt-5 border-b-2 border-[#150050] font-bold">
                <h2>Office/apartment Number:</h2>
                <h2>1234567890</h2>
              </div>
              <div className="flex justify-between mt-5 border-b-2 border-[#150050] font-bold">
                <h2>Personal Mobile number:</h2>
                <h2>0987654321</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GuardDashboard;
