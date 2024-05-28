import './App.css'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import AuthenticatedLayout from './components/AuthenticatedLayout';
import Dashboard from './components/pages/Dashboard';
import Profile from './components/pages/Profile'
import GuardDeshboard from './components/pages/GuardDeshboard';


function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route element={<AuthenticatedLayout />}>
            <Route path='/' element={<Dashboard />} />
          </Route>
          <Route path="/profile" element={<Profile />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/guardeshboard" element={<GuardDeshboard />} />


        </Routes>

      </BrowserRouter>


    </>
  );
}



export default App
