import './App.css'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Login from './components/pages/Login';
import AuthenticatedLayout from './components/AuthenticatedLayout';
import Dashboard from './components/pages/Dashboard';
import Profile from './components/pages/Profile'
import PublicRoute from './components/auth/PublicRoute';


function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<AuthenticatedLayout />}>
            <Route path='/' element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />

          </Route>



        </Routes>

      </BrowserRouter>


    </>
  );
}



export default App
