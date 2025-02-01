import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Dashboard Cards Section */}
      <div className="upperBody">
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Active Users</h3>
          <p>5556</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Ads</h3>
          <p>459</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Earnings</h3>
          <p>12,423,48.00</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Buyers</h3>
          <p>3480</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Sellers</h3>
          <p>2924</p>
        </div>
      </div>

      {/* Company Growth / Chart Section */}
      <div className="dashboard-chart">
        <h3>Company Growth</h3>
        <p>February 2024</p>
        {/* Placeholder: integrate your chart component here */}
      </div>
      </div>
      {/* User Management Table Section */}
      <div className="lowerBody">
      <div className="dashboard-table">
        <h3>User Management</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Yeray Rosalos</td>
              <td>yerayrosales@gmail.com</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Talah Cotton</td>
              <td>talahcotton2@gmail.com</td>
              <td>Blocked</td>
            </tr>
            <tr>
              <td>Yeray Rosalos</td>
              <td>yerayrosales@gmail.com</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Talah Cotton</td>
              <td>talahcotton2@gmail.com</td>
              <td>Blocked</td>
            </tr>
            <tr>
              <td>Yeray Rosalos</td>
              <td>yerayrosales@gmail.com</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Talah Cotton</td>
              <td>talahcotton2@gmail.com</td>
              <td>Blocked</td>
            </tr>
            <tr>
              <td>Yeray Rosalos</td>
              <td>yerayrosales@gmail.com</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Talah Cotton</td>
              <td>talahcotton2@gmail.com</td>
              <td>Blocked</td>
            </tr>
            <tr>
              <td>Yeray Rosalos</td>
              <td>yerayrosales@gmail.com</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Talah Cotton</td>
              <td>talahcotton2@gmail.com</td>
              <td>Blocked</td>
            </tr>
            <tr>
              <td>Yeray Rosalos</td>
              <td>yerayrosales@gmail.com</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Talah Cotton</td>
              <td>talahcotton2@gmail.com</td>
              <td>Blocked</td>
            </tr>
            <tr>
              <td>Yeray Rosalos</td>
              <td>yerayrosales@gmail.com</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Talah Cotton</td>
              <td>talahcotton2@gmail.com</td>
              <td>Blocked</td>
            </tr>
            <tr>
              <td>Yeray Rosalos</td>
              <td>yerayrosales@gmail.com</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Talah Cotton</td>
              <td>talahcotton2@gmail.com</td>
              <td>Blocked</td>
            </tr>
            <tr>
              <td>Yeray Rosalos</td>
              <td>yerayrosales@gmail.com</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Talah Cotton</td>
              <td>talahcotton2@gmail.com</td>
              <td>Blocked</td>
            </tr>
            <tr>
              <td>Yeray Rosalos</td>
              <td>yerayrosales@gmail.com</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Talah Cotton</td>
              <td>talahcotton2@gmail.com</td>
              <td>Blocked</td>
            </tr>
            <tr>
              <td>Yeray Rosalos</td>
              <td>yerayrosales@gmail.com</td>
              <td>Active</td>
            </tr>
            <tr>
              <td>Talah Cotton</td>
              <td>talahcotton2@gmail.com</td>
              <td>Blocked</td>
            </tr>
            {/* Additional rows if needed */}
          </tbody>
        </table>
      </div>
      </div>
      
    </div>
  );
};

export default Dashboard;
