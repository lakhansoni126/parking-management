import { Navigate, Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const AuthenticatedLayout = () => {
    const auth = localStorage.getItem('user');

    return auth ? (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    ) : (
        <Navigate to="login" />
    );
}

export default AuthenticatedLayout;