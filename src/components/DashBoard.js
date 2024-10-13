import React from 'react';
import './Dashboard.css'; // Import the CSS file

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Welcome to the Nutrition Management System!</p>
      
      <div className="image-container">
        <img 
          src="https://www.prabhatkhabar.com/wp-content/uploads/2024/09/Nutri.jpg" 
          alt="Nutrition Management" 
          className="dashboard-image" 
        />
      </div>
      <div className="links">
        <a href="/food-list">Food List</a>
        <a href="/diet-plan">Diet Plan</a>
        <a href="/meal-log">Meal Log</a>
        <a href="/SignUP">SignUP</a>
        <a href="/Login">Login</a>
      </div>
    </div>
  );
}

export default Dashboard;
