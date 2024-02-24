import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigator from "./Navigation";
import "./Navigation/index.css"

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigator />
      <div>
      <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses/>} />
          <Route path="Courses" element={<Courses/>} />
        </Routes>
      </div>
    </div>
  );
}

export default Kanbas;