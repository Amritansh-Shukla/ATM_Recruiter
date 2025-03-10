import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import HRLogin from "./pages/HRLogin";
import Register from "./pages/Register";
import JobList from "./pages/JobListPage";
import JobDetail from "./pages/JobDetailPage";
import ApplyJob from "./pages/ApplyJobPage";
import Dashboard from "./pages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { Navbar } from "react-bootstrap";
import Profile from "./pages/Profile";
import HrRegister from "./pages/HRRegister";
import HrDashboard from "./pages/HRDashboard";
import About from "./pages/About";
import Footer from "./components/Footer";
import AddJob from "./pages/AddJob";
import "./App.css";
function App() {
  return (
    <>
     <div className="diagonal-background">
    <Navbar/> 
    <Router> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hr-login" element={<HRLogin />} />
        <Route path="/hr-register" element={<HrRegister />} />
        <Route path="/hr-dashboard" element={<HrDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/job-list" element={<JobList />} />
        <Route path="/job-detail/:jobId" element={<JobDetail />} />
        <Route path="/apply-job/:jobId" element={<ApplyJob />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/profile" element={<Profile/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/addjob" element={<AddJob/>} />



        
      </Routes>
      </Router>
      </div>
      
      </>
  );
}

export default App;
