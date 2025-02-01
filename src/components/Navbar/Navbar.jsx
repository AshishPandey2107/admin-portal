import { FaBell } from "react-icons/fa";
// import profilePic from "../../assets/profile.png"; // Replace with actual profile image
import "../../components/Navbar/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Search Bar */}
      <input type="text" className="navbar-search" />

      {/* Right Section: Notification & Profile */}
      <div className="navbar-icons">
        <FaBell className="navbar-icon" />
        <img src={""} alt="Profile" className="navbar-profile" />
      </div>
    </div>
  );
};

export default Navbar;
