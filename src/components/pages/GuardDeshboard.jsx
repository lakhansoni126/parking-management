import React from "react";
import { useState, useEffect } from "react";

function GuardDeshboard() {
  const [activeSection, setActiveSection] = useState("profile");
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      <section className="h-screen min-h-[600px] bg-[#610094]">
        <div className="flex text-white">
          <div className="h-screen min-h-[600px] w-[20vw] pt-5 border-r-2 border-r-[#150050] text-[18px] font-bold">
            <div>
              <button
                className="w-full border-[#150050] border-b-2 pb-5 align-text-center"
                onClick={() => setActiveSection("profile")}
              >
                Profile
              </button>
            </div>
            <div>
              <button
                className="w-full border-[#150050] py-5 border-b-2 align-text-center"
                onClick={() => setActiveSection("complain")}
              >
                Complain
              </button>
            </div>
          </div>

          {activeSection === "profile" && userData && (
            <div id="User-info" className="w-[80vw] flex flex-col items-center">
              <h1 className="font-bold text-[20px] mt-[120px]">
                User Information
              </h1>
              <div className="flex gap-4 text-[20px] mt-10">
                <h2 className="font-bold">Name</h2>
                <h4>{userData.name || "N/A"}</h4>
              </div>
              <div className="flex gap-4 text-[20px] mt-10">
                <h4 className="font-bold">Email</h4>
                <h4>{userData.email || "N/A"}</h4>
              </div>
              <div className="flex gap-4 text-[20px] mt-10">
                <h4 className="font-bold">Office Number</h4>
                <h4>{userData.officeNum || "N/A"}</h4>
              </div>
              <div className="flex gap-4 text-[20px] mt-10">
                <h4 className="font-bold">Vehicle Number</h4>
                <h4>{userData.vehicleNum || "N/A"}</h4>
              </div>
              <div className="flex gap-4 text-[20px] mt-10">
                <h4 className="font-bold">Vehicle Type</h4>
                <h4>{userData.vehicleType || "N/A"}</h4>
              </div>
            </div>
          )}

          {activeSection === "complain" && (
            <div id="Complain" className="w-[80vw]">
              <h1 className="font-bold text-[20px] pl-10 mt-[40px]">
                Complaints
              </h1>
              <div className="flex flex-row gap-2  justify-center">

              <input  className="bg-[#ffffff45] p-2 w-[40vw] rounded-sm " placeholder="Search... " type="text" name="" id="" />
              <button className=" bg-orange-500 px-7 rounded-sm py-2" >Search</button>
              </div>
              <div className="ml-10 mt-5">
              <h2>Hemant Soni</h2>
              <h2>RJ12cb350</h2>
              <textarea className=" bg-transparent border-2 border-[#150050]  mt-5 p-2 w-[70vw]  rounded-lg" name="" id="" placeholder="Write your Complain Here..." cols="30" rows="10"></textarea>

              <button className=" block   mt-2 bg-orange-500 px-7 rounded-sm py-2" >Submit</button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default GuardDeshboard;
