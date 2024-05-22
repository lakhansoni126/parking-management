import './App.css'
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Dashboard from './components/pages/Dashboard';


function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route element={<ThemeLayout />}>
            <Route path='/' element={<Dashboard />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />


        </Routes>

      </BrowserRouter>


    </>
  );
}
function ThemeLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App
