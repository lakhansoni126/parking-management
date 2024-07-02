import { useState, useEffect } from "react";
import { ref, get } from "firebase/database";
import { db } from '../../firebase';
import BottomDesign from '../Design/BottomDesign';
import TopDesign from "../Design/TopDesign"


function GuardDashboard() {
  const [userData, setUserData] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState('English');

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
            setSearchResult(Object.values(searchResults)[0]);
          } else {
            setSearchResult("noData");
          }
        } else {
          setSearchResult("noData");
        }
      } else {
        setSearchResult("noPermission");
      }
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const texts = {
    English: {
      guardInfo: "Guard Information",
      name: "Name",
      email: "Email",
      employeeId: "Employee ID",
      vehicleNumber: "Vehicle Number",
      vehicleType: "Vehicle Type",
      complaints: "Complaints",
      searchPlaceholder: "Search by vehicle number...",
      search: "Search",
      loading: "Loading...",
      noData: "No data found",
      noPermission: "You do not have the required permissions to perform this search.",
      officeFloor: "Office/apartment Floor",
      officeNum: "Office/apartment Number",
      contactInfo: "Personal Mobile number",
    },
    Hindi: {
      guardInfo: "गार्ड जानकारी",
      name: "नाम",
      email: "ईमेल",
      employeeId: "कर्मचारी आयडी",
      vehicleNumber: "वाहन नंबर",
      vehicleType: "वाहन प्रकार",
      complaints: "शिकायतें",
      searchPlaceholder: "वाहन संख्या द्वारा खोजें...",
      search: "खोज",
      loading: "लोड हो रहा है...",
      noData: "कोई डेटा नहीं मिला",
      noPermission: "आपके पास यह खोज करने के लिए आवश्यक अनुमतियाँ नहीं हैं।",
      officeFloor: "ऑफिस/अपार्टमेंट मंजिल",
      officeNum: "ऑफिस/अपार्टमेंट नंबर",
      contactInfo: "व्यक्तिगत मोबाइल नंबर",
    }
  };

  const t = texts[language];

  return (
    <section className="h-full">
    <TopDesign/>
      <div className="border-b-2 border-[#49108B]">
        <ul className=" absolute top-[4px] right-28 flex p-2 text-white gap-2">
          <li>
            <button
              className="p-2 w-[90px] rounded-md hover:bg-[#7E30E1]  bg-[#49108B]"
              onClick={() => setLanguage('English')}
            >
              English
            </button>
          </li>
          <li>
            <button
              className="p-2 w-[90px] rounded-md hover:bg-[#7E30E1]  bg-[#49108B]"
              onClick={() => setLanguage('Hindi')}
            >
              हिन्दी
            </button>
          </li>
        </ul>
      </div>
      <div id="guardDeshboard" className="flex text-black">
        <div className="guardinfo h-screen min-h-[600px] w-20vw pt-10 border-r-2 border-r-[#49108B] text-[18px] font-bold">
          <div id="User-info" className="w-[20vw] flex flex-col">
            <h1 className="font-bold text-[20px] text-center">{t.guardInfo}</h1>
            <div className="p-4 text-[15px]">
              <h2 className="font-bold">{t.name}:</h2>
              <h4>{userData ? userData.name : "N/A"}</h4>
            </div>
            <div className="p-4 text-[15px]">
              <h4 className="font-bold">{t.email}:</h4>
              <h4>{userData ? userData.email : "N/A"}</h4>
            </div>
            <div className="p-4 text-[15px]">
              <h4 className="font-bold">{t.employeeId}:</h4>
              <h4>{userData ? userData.employeeId: "N/A"}</h4>
            </div>
           
          </div>
        </div>
        <div id="Complain" className="w-[80vw]">
          <h1 className="font-bold text-[15px] pl-10 mt-[40px]">{t.complaints}</h1>
          <div className="flex flex-row gap-2 justify-center">
            <input
              className="bg-[#F3F8FF] border-b-2 border-[#49108B] focus-visible:outline-none p-2 w-[40vw] rounded-sm"
              placeholder={t.searchPlaceholder}
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              className="bg-[#49108B] transition-colors text-white hover:bg-[#7E30E1] px-7 rounded-sm py-2"
              onClick={handleSearch}
            >
              {t.search}
            </button>
          </div>
          <div className="flex justify-center">
            <div className="w-80vh  w-[50vw] mt-5">
              {loading && <div>{t.loading}</div>}
              {error && <div>Error: {error.message}</div>}
              {searchResult && typeof searchResult === 'object' && (
                <>
                  <div className="flex justify-between mt-5 font-bold">
                    <h2>{t.name}:</h2>
                    <h2>{searchResult.name}</h2>
                  </div>
                  <div className="flex justify-between mt-5 font-bold">
                    <h2>{t.vehicleNumber}:</h2>
                    <h2>{searchResult.vehicleNum}</h2>
                  </div>
                  <div className="flex justify-between mt-5 font-bold">
                    <h2>{t.officeFloor}:</h2>
                    <h2>{searchResult.officeFloor}</h2>
                  </div>
                  <div className="flex justify-between mt-5 font-bold">
                    <h2>{t.officeNum}:</h2>
                    <h2>{searchResult.officeNum}</h2>
                  </div>
                  <div className="flex justify-between mt-5 font-bold">
                    <h2>{t.contactInfo}:</h2>
                    <h2>{searchResult.contactInfo}</h2>
                  </div>
                </>
              )}
              {searchResult && typeof searchResult === 'string' && (
                <div className="mt-5">{t[searchResult]}</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <BottomDesign/>
    </section>
  );
}

export default GuardDashboard;
