import { Routes, Route, Router } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar/Navbar";
// import Users from "./pages/Users";
// import Bookings from "./pages/Bookings";

const App = () => {
  return (
    <div className="flex" style={{
      // border: "1px solid black",
      position: "fixed",
      display: "flex",
      top: "5%",
      bottom: "5%",
      left: "10%",
      right: "10%",
      gap: "1rem"}}>
      <Sidebar />
      <div className="flex-1 p-6" style={{width:"-webkit-fill-available"}}>
      <Navbar />
        <Routes>
        <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/users" element={<Users />} /> */}
          {/* <Route path="/bookings" element={<Bookings />} /> */}
        </Routes>
      </div>
    </div>

    // <Router>
    //   <div className="app-container">
    //     <Sidebar />
    //     <div className="main-content">
    //       <Navbar />
    //       <Routes>
    //         <Route path="/dashboard" element={<Dashboard />} />
    //         {/* <Route path="/bookings" element={<Bookings />} /> */}
    //         {/* <Route path="/users" element={<Users />} /> */}
    //       </Routes>
    //     </div>
    //   </div>
    // </Router>

  );
};

export default App;