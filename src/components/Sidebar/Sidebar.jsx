import { NavLink } from "react-router-dom";
// import logo from "../../assets/logo.png";
import "../../components/Sidebar/Sidebar.css";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "User Management", path: "/users" },
    { name: "All Bookings", path: "/bookings" },
    { name: "Live Chat History", path: "/chat-history" },
    { name: "Settings", path: "/settings" },
    { name: "Multi-Currency", path: "/multi-currency" },
    { name: "Transaction List", path: "/transactions" },
    { name: "Referral History", path: "/referral-history" },
    { name: "Rating and Review", path: "/ratings" },
    { name: "Push Notification", path: "/notifications" },
    { name: "Package Plan", path: "/package-plan" },
    { name: "History", path: "/history" },
    { name: "Category", path: "/category" },
    { name: "Google Analytics", path: "/analytics" },
    { name: "Google Map", path: "/map" },
  ];

  return (
    <div className="sidebar">
      {/* Logo */}
      <div 
      className="sidebar-link2"
      // className="sidebar-logo"
      >
        
        Logo
      </div>

      {/* Menu Items */}
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <div key={item.name} className="sidebar-item">
            <NavLink to={item.path} className="sidebar-link">
              {item.name}
            </NavLink>
            {index !== menuItems.length - 1 && <hr className="sidebar-divider" />}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
