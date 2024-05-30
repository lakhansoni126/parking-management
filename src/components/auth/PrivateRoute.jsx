import { Navigate } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

const PrivateRoute = ({ Component }) => {
    let isAuth = false;
    try {
        if (localStorage.getItem("user")) {
            isAuth = true;
        }
    } catch (error) {
        console.log("ERROR ", error);
    }
    // Your authentication logic goes here...

    return isAuth ? (
        <>
            <Header />
            <Component />
            <Footer />
        </>
    ) : (
        <Navigate to="/" />
    );
};
export default PrivateRoute;
