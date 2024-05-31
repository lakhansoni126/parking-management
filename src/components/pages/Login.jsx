import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { ref, get } from "firebase/database";
import { auth, googleProvider, db } from "../../firebase";

const Login = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();
    try {
        const auth = localStorage.getItem("user");
        if (auth) {
            window.location.replace("/dashboard");
        }
    } catch (e) {
        console.log("ERROR ", e);
    }
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;

            const checkUserInCollection = async (collection) => {
                const userRef = ref(db, `${collection}/${user.uid}`);
                const userSnapshot = await get(userRef);
                return userSnapshot.exists() ? userSnapshot.val() : null;
            };

            const [userInUsers, userInGuards, userInBuildings] =
                await Promise.all([
                    checkUserInCollection("users"),
                    checkUserInCollection("guards"),
                    checkUserInCollection("buildings"),
                ]);

            const existingUser = userInUsers || userInGuards || userInBuildings;

            if (existingUser) {
                localStorage.setItem("user", JSON.stringify(existingUser));
                navigate("/dashboard");
            } else {
                navigate("/profile", {
                    state: { user: user.reloadUserInfo, uid: user.uid },
                });
            }
        } catch (error) {
            console.error("Error during Google Sign-In", error);
            setError(error.message);
        }
    };

    return (
        <>
            <section className="bg-[#222831] h-screen flex flex-row-reverse justify-around items-center">
                <div className="text-[#EEEEEE] py-20">
                    <h1 className="font-bold py-2 text-[24px]">
                        Parking Management
                    </h1>
                    <h1 className="text-[18px]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vitae, laboriosam?
                    </h1>
                    <h1 className="text-[18px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </h1>
                    {error && <p>Error: {error}</p>}
                    <button
                        onClick={handleGoogleSignIn}
                        className="bg-[#FF5722] font-bold text-[17px] px-4 p-1 rounded-[20px] hover:bg-[#393E46] my-5"
                    >
                        Login
                    </button>
                </div>
                <div>
                    <img
                        className="w-96 border-2 rounded-lg"
                        src="../../../images/logo.png"
                        alt="Logo"
                    />
                </div>
            </section>
        </>
    );
};

export default Login;
