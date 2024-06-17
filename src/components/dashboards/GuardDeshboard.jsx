import { useState, useEffect } from "react";
import { ref, get, } from "firebase/database";
import { db } from '../../firebase';

function GuardDashboard() {

  const [userData, setUserData] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);


    try {
      const guardRef = ref(db, `guards/${userData.uid}`);
      const guardSnapshot = await get(guardRef);

      if (guardSnapshot.exists() && guardSnapshot.val().auth) {
        const searchValue = searchInput.toLowerCase();
        const dbRef = ref(db, 'users');

        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          const users = snapshot.val();
          const searchResults = Object.values(users).filter(user => {
            const vehicleNum = user.vehicleNum ? user.vehicleNum.toLowerCase() : '';
            return vehicleNum.endsWith(searchValue) || vehicleNum === searchValue;
          });

          if (searchResults.length > 0) {
            console.log(searchResults)
            setSearchResult(Object.values(searchResults)[0]);
            console.log("use", searchResult)
          } else {
            setSearchResult("No data found");
          }
        } else {
          setSearchResult("No data found");
        }
      } else {
        setSearchResult("You do not have the required permissions to perform this search.");
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className=" h-full bg-[#222831]">
      <div id="guardDeshboard" className="flex text-[#EEEEEE]">
        <div className="guardinfo h-[70vh] min-h-[600px] pt-10 border-r-2 border-r-[#393E46] text-[18px] font-bold">
          <div id="User-info" className="w-[20vw] flex flex-col">
            <h1 className="font-bold text-[20px] text-center">Guard Information</h1>
            <div className=" p-4 text-[15px]">
              <h2 className="font-bold">Name:</h2>
              <h4>{userData ? userData.name : "N/A"}</h4>
            </div>
            <div className=" p-4 text-[15px]">
              <h4 className="font-bold">Email:</h4>
              <h4>{userData ? userData.email : "N/A"}</h4>
            </div>
            <div className=" p-4 text-[15px]">
              <h4 className="font-bold">Office Number:</h4>
              <h4>{userData ? userData.officeNum : "N/A"}</h4>
            </div>
            <div className=" p-4 text-[15px]">
              <h4 className="font-bold">Vehicle Number:</h4>
              <h4>{userData ? userData.vehicleNum : "N/A"}</h4>
            </div>
            <div className=" p-4 text-[15px]">
              <h4 className="font-bold">Vehicle Type:</h4>
              <h4>{userData ? userData.vehicleType : "N/A"}</h4>
            </div>
          </div>
        </div>
        <div id="Complain" className="w-[80vw]">
          <h1 className="font-bold text-[15px] pl-10 mt-[40px]">Complaints</h1>
          <div className="flex flex-row gap-2 justify-center">
            <input
              className="bg-[#393E46] p-2 w-[40vw] rounded-sm"
              placeholder="Search by vehicle number..."
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="bg-[#FF5722] hover:bg-[#393E46] px-7 rounded-sm py-2" onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className="flex justify-center">
            <div className="w-80vh w-[50vw] mt-5">
              {loading && <div>Loading...</div>}
              {error && <div>Error: {error.message}</div>}
              {searchResult && typeof searchResult === 'object' && (
                <>
                  <div className="flex justify-between mt-5 font-bold">
                    <h2>Name:</h2>
                    <h2>{searchResult.name}</h2>
                  </div>
                  <div className="flex justify-between mt-5 font-bold">
                    <h2>Vehicle:</h2>
                    <h2>{searchResult.vehicleNum}</h2>
                  </div>
                  <div className="flex justify-between mt-5 font-bold">
                    <h2>Office/apartment Floor:</h2>
                    <h2>{searchResult.officeFloor}</h2>
                  </div>
                  <div className="flex justify-between mt-5 font-bold">
                    <h2>Office/apartment Number:</h2>
                    <h2>{searchResult.officeNum}</h2>
                  </div>
                  <div className="flex justify-between mt-5 font-bold">
                    <h2>Personal Mobile number:</h2>
                    <h2>{searchResult.contactInfo}</h2>
                  </div>
                </>
              )}
              {searchResult && typeof searchResult === 'string' && (
                <div className="mt-5">{searchResult}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GuardDashboard;
