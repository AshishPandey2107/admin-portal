import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
// import Users from "./pages/Users";
// import Bookings from "./pages/Bookings";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/users" element={<Users />} /> */}
          {/* <Route path="/bookings" element={<Bookings />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;