import React from "react";
import "./Dashboard.css";
import CompanyGrowthChart from "../../components/CompanyGrowthChart/CompanyGrowthChart";
import DashboardCard from "../../components/DashboardCard/DashboardCard";
import UserManagementTable from "../../components/UserManagementTable/UserManagementTable";

const sampleUsers = [
  { id: 1, name: "Yeray Rosalos", email: "yerayrosales@gmail.com", status: "Active" },
  { id: 2, name: "Talah Cotton", email: "talahcotton2@gmail.com", status: "Blocked" },
  { id: 3, name: "Yeray Rosalos", email: "yerayrosales@gmail.com", status: "Active" },
  { id: 4, name: "Talah Cotton", email: "talahcotton2@gmail.com", status: "Blocked" },
  { id: 5, name: "Yeray Rosalos", email: "yerayrosales@gmail.com", status: "Active" },
  { id: 6, name: "Talah Cotton", email: "talahcotton2@gmail.com", status: "Blocked" },
  // ... add more users as needed
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Dashboard Cards Section */}
      <div className="upperBody">

        <div className="card-container
        " style={{ display: "flex" }}>
          <div className="dashboard-cards">
            <div className="dashboard-card">
              <DashboardCard
                number="5556"
                title="Active Users"
                waveColor="rgba(25, 159, 177, 0.5)"
                textColor="#199FB1"
                wavePath="M0,50 L100,30 L200,70 L300,30 L400,70 L500,50 L500,150 L0,150 Z"


              />
            </div>
            <div className="dashboard-card">
              <DashboardCard
                number="459"
                title="Total Ads"
                waveColor="rgba(227, 238, 80, 0.5)"
                textColor="#c8b972e8"
                wavePath="M0,50 L60,70 L120,50 L180,70 L240,50 L300,70 L360,50 L420,70 L480,50 L500,50 L500,150 L0,150 Z"


              />
            </div>
            <div className="dashboard-card">
              <DashboardCard
                number="3480"
                title="Total Buyers"
                waveColor="rgba(246, 43, 43, 0.5)"
                textColor="#b1311982"
                wavePath="M0,60 C100,10 400,110 500,60 L500,150 L0,150 Z"

              />
            </div>
            <div className="dashboard-card">
              <DashboardCard
                number="2924"
                title="Total Sellers"
                waveColor="rgb(219, 14, 14)"
                textColor="#ca9d82"
                wavePath="M0,45 C250,150 250,0 500,45 L500,150 L0,150 Z"
              />
            </div>

          </div>
          <div className="dashboard-card2">
            <DashboardCard
              number="12,423,48.00"
              title="Total Earnings"
              waveColor="rgba(255, 115, 0, 0.5)"
              textColor="#ff7300"
              wavePath="M0,55 C150,80 350,120 500,55 L500,150 L0,150 Z"
            />
          </div>
        </div>


        {/* Company Growth / Chart Section */}
        <div className="dashboard-chart">
          <CompanyGrowthChart />
        </div>
      </div>
      {/* User Management Table Section */}
      <div className="lowerBody">
      <UserManagementTable users={sampleUsers} />
      </div>

    </div>
  );
};

export default Dashboard;
