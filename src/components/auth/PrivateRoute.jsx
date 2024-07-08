import { Navigate } from "react-router-dom";
import Header from "../layout/Header";

const PrivateRoute = ({ Component }) => {
    const isAuth = !!localStorage.getItem("user");

    return isAuth ? (
        <>
            {/* <Header /> */}
            <Component />
        </>
    ) : (
        <Navigate to="/" />
    );
};

export default PrivateRoute;
