import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { ref, get } from "firebase/database";
import { auth, googleProvider, db } from "../../firebase";
import Footer from "../layout/Footer";
import Boost from "../layout/Boost";

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

            const [userInUsers, userInGuards, userInBuildings, userInoffice] =
                await Promise.all([
                    checkUserInCollection("users"),
                    checkUserInCollection("guards"),
                    checkUserInCollection("buildings"),
                    checkUserInCollection("office"),
                ]);

            const existingUser =
                userInUsers || userInGuards || userInBuildings || userInoffice;

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
            <div className="bg-white max-h-screen ">
                <header className="absolute inset-x-0 top-0 z-50">
                    <nav
                        className="flex items-center justify-between p-6 lg:px-8"
                        aria-label="Global"
                    >
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-[64px] absolute top-0 w-auto"
                                    src="../../../images/logo.png"
                                    alt="logo"
                                />
                            </a>
                        </div>

                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a
                                onClick={handleGoogleSignIn}
                                className=" cursor-pointer text-sm font-semibold leading-6 text-gray-900"
                            >
                                Log in <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </nav>
                </header>

                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div
                        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                        aria-hidden="true"
                    >
                        <div
                            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                        />
                    </div>
                    <div className="mx-auto max-w-2xl sm:pt-24 ">
                        <div className="text-center relative z-50">
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Parking Management
                            </h1>
                            <div className="flex items-center justify-center gap-x-6">
                                <img
                                    className=" w-72 h-72 "
                                    src="../../../images/logo.png"
                                    alt="Logo"
                                />
                            </div>

                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Say goodbye to parking hassles with EasyPark,
                                your one-stop solution for all your parking
                                needs. From finding the nearest spot to seamless
                                payments, we've got you covered. Simplify your
                                parking experience today!
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <button
                                    onClick={handleGoogleSignIn}
                                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="absolute inset-x-0 top-[calc(100%-13rem)]-z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                        aria-hidden="true"
                        style={{ height: "-webkit-fill-available" }}
                    >
                        <div
                            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                            }}
                        />
                    </div>
                </div>
            </div>
            <Boost handleGoogleSignIn={handleGoogleSignIn} />
            <Footer />
        </>
    );
};

export default Login;
