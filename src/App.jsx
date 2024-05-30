import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import AuthenticatedLayout from "./components/AuthenticatedLayout";
import Dashboard from "./components/pages/Dashboard";
import Profile from "./components/pages/Profile";
import PublicRoute from "./components/auth/PublicRoute";
import PrivateRoute from "./components/auth/PrivateRoute";
import PageNotFound from "./components/PageNotFound";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route>
                        <Route path="/" element={<Login />} />
                        <Route path="/profile" element={<Profile />} />
                        <AuthenticatedLayout
                            path="/dashboard"
                            element={<Dashboard />}
                        />
                    </Route> */}
                    {/* <Route element={<AuthenticatedLayout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route> */}
                    <Route path="/" element={<Login />}/>
                    <Route path="/profile" element={<Profile />} />
                        <Route
                            exact
                            path="/dashboard"
                            element={<PrivateRoute Component={Dashboard} />}
                        />
                        <Route path="*" element={<PageNotFound />} />
                        
                  
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
