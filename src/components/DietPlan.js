import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function DietPlan() {
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    document.body.style.backgroundImage = "url('https://static.toiimg.com/photo/109371026.cms')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";

    return () => {
      document.body.style.backgroundImage = null;
    };
  }, []);

  const meals = {
    breakfast: {
      items: [
        "Oatmeal topped with fruits and nuts",
        "Greek yogurt with honey and mixed berries",
        "Scrambled eggs with spinach and whole-grain toast"
      ],
      benefits: [
        "Provides essential nutrients for energy.",
        "Rich in protein and healthy fats.",
        "Promotes muscle recovery and supports weight management."
      ],
      highlights: [
        "Boosts metabolism",
        "Aids in digestion",
        "Supports immune health"
      ]
    },
    lunch: {
      items: [
        "Grilled chicken salad with a variety of vegetables and olive oil dressing",
        "Quinoa bowl with black beans, corn, diced tomatoes, and avocado",
        "Whole grain wrap with turkey, spinach, and avocado"
      ],
      benefits: [
        "Supports muscle growth and repair.",
        "High in fiber, keeping you full longer.",
        "Packed with vitamins and minerals."
      ],
      highlights: [
        "Enhances cardiovascular health",
        "Regulates blood sugar levels",
        "Promotes overall health"
      ]
    },
    dinner: {
      items: [
        "Baked salmon with steamed broccoli and brown rice",
        "Stir-fried tofu with mixed vegetables and quinoa",
        "Lentil soup with whole-grain bread"
      ],
      benefits: [
        "Rich in omega-3 fatty acids.",
        "Boosts immunity with antioxidants.",
        "Provides plant-based protein and fiber."
      ],
      highlights: [
        "Promotes better sleep",
        "Supports brain health",
        "Helps in weight management"
      ]
    },
  };

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
  };

  const closePopup = () => {
    setSelectedMeal(null);
  };

  return (
    <div style={{ padding: '20px', color: '#2c3e50' }}>
      <div className="container" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}>
        <h2 style={{ color: '#9b1c1c' }}>Diet Plan</h2>
        <p><strong>Objective:</strong> General Health</p>
        <h3 onClick={() => handleMealClick('breakfast')} style={{ color: '#9b1c1c', cursor: 'pointer' }}>Breakfast</h3>
        <h3 onClick={() => handleMealClick('lunch')} style={{ color: '#9b1c1c', cursor: 'pointer' }}>Lunch</h3>
        <h3 onClick={() => handleMealClick('dinner')} style={{ color: '#9b1c1c', cursor: 'pointer' }}>Dinner</h3>

        {selectedMeal && (
          <div className="popup" style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            padding: '20px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            borderRadius: '8px'
          }}>
            <div className="popup-content">
              <span className="close" onClick={closePopup} style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                cursor: 'pointer',
                fontSize: '20px',
                fontWeight: 'bold'
              }}>&times;</span>
              <h3 style={{ color: '#9b1c1c' }}>{selectedMeal.charAt(0).toUpperCase() + selectedMeal.slice(1)}</h3>
              <h4 style={{ color: '#2c3e50' }}>Items:</h4>
              <ul>
                {meals[selectedMeal].items.map((item, index) => (
                  <li key={index} style={{ color: '#34495e' }}>{item}</li>
                ))}
              </ul>
              <h4 style={{ color: '#2c3e50' }}>Benefits:</h4>
              <ul>
                {meals[selectedMeal].benefits.map((benefit, index) => (
                  <li key={index} style={{ color: '#34495e' }}>{benefit}</li>
                ))}
              </ul>
              <h4 style={{ color: '#2c3e50' }}>Highlights:</h4>
              <ul>
                {meals[selectedMeal].highlights.map((highlight, index) => (
                  <li key={index} className="highlight" style={{ color: '#34495e' }}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <Link to="/" style={{
          color: '#fff',
          backgroundColor: '#9b1c1c',
          padding: '10px 20px',
          borderRadius: '5px',
          textDecoration: 'none',
          marginTop: '20px'
        }}>Back to Dashboard</Link>
      </div>
    </div>
  );
}

export default DietPlan;
