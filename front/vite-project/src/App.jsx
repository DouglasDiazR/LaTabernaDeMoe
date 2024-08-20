import Home from "./views/Home/Home";
import "./index.css";
import Appointments from "./views/appointments/Appointments";
import Navbar from "./components/navbar/Navbar";
import FormLogin from "./views/login/Login";
import FormRegister from "./views/register/Register";
import { Route, Routes } from "react-router-dom";
import About from "./views/about/About";
import AppointmentsForm from "./views/appointmetsForm/AppointmentsForm";

function App() {
  return (
    <div className="appDiv">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/register" element={<FormRegister />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/appointmentform" element={<AppointmentsForm />} />
      </Routes>
    </div>
  );
}

export default App;
