import SearchForm from "../searchForm";
import DataCard from "../dataCard";
import "./_dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashbord-search">
        <h2>IP Address Tracker</h2>
        <SearchForm />
      </div>
      <div className="dashboard-datacard">
        <DataCard />
      </div>
    </div>
  );
};

export default Dashboard;
