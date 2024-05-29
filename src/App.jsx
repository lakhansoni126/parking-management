import './App.css'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Login from './components/pages/Login';
import AuthenticatedLayout from './components/AuthenticatedLayout';
import Dashboard from './components/pages/Dashboard';
import Profile from './components/pages/Profile'
import GuardDeshboard from './components/GuardDeshboard';


function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route element={<AuthenticatedLayout />}>
            <Route path='/' element={<Dashboard />} />

            <Route path="/guardeshboard" element={<GuardDeshboard />} />
          </Route>
          <Route path="/profile" element={<Profile />} />

          <Route path="/login" element={<Login />} />


        </Routes>

      </BrowserRouter>


    </>
  );
}



export default App
