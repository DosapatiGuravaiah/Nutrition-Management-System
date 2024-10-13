import React, { useState, useEffect } from 'react';
import './MealLog.css';
import { Link } from 'react-router-dom';

function MealLog() {
  const [visibleMeal, setVisibleMeal] = useState(null);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // Apply the background image to the body
    document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/64/61/e9/6461e91104acce65bc93c8c93626725b.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";

    // Clean up background when component is unmounted
    return () => {
      document.body.style.backgroundImage = '';
    };
  }, []); // Empty dependency array to run only once when component mounts

  const meals = [
    { id: 1, name: 'Breakfast', items: ['Oatmeal', 'Banana', 'Almonds', 'Orange Juice', 'Avocado Toast'], calories: 420 },
    { id: 2, name: 'Lunch', items: ['Grilled Chicken Salad', 'Quinoa', 'Roasted Veggies', 'Hummus Wrap', 'Fruit Salad'], calories: 600 },
    { id: 3, name: 'Dinner', items: ['Baked Salmon', 'Steamed Broccoli', 'Brown Rice', 'Miso Soup', 'Kale Salad'], calories: 500 },
    { id: 4, name: 'Snacks', items: ['Greek Yogurt', 'Fruit', 'Protein Bar', 'Carrot Sticks', 'Almonds'], calories: 250 },
    { id: 5, name: 'Pre-Workout', items: ['Protein Shake', 'Apple', 'Peanut Butter', 'Granola Bar'], calories: 300 },
    { id: 6, name: 'Post-Workout', items: ['Protein Smoothie', 'Boiled Eggs', 'Spinach Salad', 'Chicken Wrap'], calories: 450 },
    { id: 7, name: 'Midnight Snack', items: ['Cottage Cheese', 'Mixed Nuts', 'Dark Chocolate'], calories: 200 },
  ];

  const openMeal = (id) => {
    setVisibleMeal(id);
    setClosing(false);
  };

  const closeMeal = () => {
    setClosing(true);
    setTimeout(() => setVisibleMeal(null), 800);
  };

  return (
    <div className="meal-log">
      <h2>Meal Log</h2>
      <p>Track your meals and stay on top of your nutrition:</p>
      {meals.map(meal => (
        <div key={meal.id} className="meal-item">
          <button onClick={() => openMeal(meal.id)} className="meal-toggle">
            {meal.name} - {visibleMeal === meal.id ? 'Hide' : 'Show'}
          </button>
        </div>
      ))}

      {meals.map(meal => (
        visibleMeal === meal.id && (
          <div key={meal.id} className={`popup-container ${closing ? 'slide-out' : 'slide-in'}`}>
            <div className="popup-content animated-popup">
              <button className="close-btn" onClick={closeMeal}>×</button>
              <h3>{meal.name}</h3>
              <ul>
                {meal.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>Total Calories: {meal.calories}</p>
            </div>
          </div>
        )
      ))}
      <Link to="/">Back to Dashboard</Link>
    </div>
  );
}

export default MealLog;
