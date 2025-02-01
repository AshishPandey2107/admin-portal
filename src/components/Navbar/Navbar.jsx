import { FaBell, FaSearch } from "react-icons/fa";
import image from "../../assets/image.png"; // Replace with actual profile image
import "../../components/Navbar/Navbar.css";

const Navbar = () => {
  return (
      <div className="navbar">
      {/* Search Bar */}
      <div className="navbar-search-container">
        <input
          type="text"
          className="navbar-search"
          // placeholder="Search..."
        />
        <div className="searchIcon-div">
        <FaSearch className="navbar-search-icon" />
        </div>

      </div>
      {/* Right Section: Notification & Profile */}
      <div className="navbar-icons">
        <FaBell className="navbar-icon" />
        <img src={image} alt="Profile" className="navbar-profile" />
      </div>
    </div>
    
    
  );
};

export default Navbar;
