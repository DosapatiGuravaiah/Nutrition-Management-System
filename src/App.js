import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/DashBoard';
import FoodList from './components/FoodList';
import DietPlan from './components/DietPlan';
import MealLog from './components/MealLog';
import Login from './components/Login';
import Signup from './components/SignUp';
import NavBar from './components/NavBar';
import Profile from './components/Profile'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/food-list" element={<FoodList />} />
        <Route path="/diet-plan" element={<DietPlan />} />
        <Route path="/meal-log" element={<MealLog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </Router>
  );
}

export default App;
