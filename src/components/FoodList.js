import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './FoodList.css'; // Ensure this path is correct

function FoodList() {
  const categories = [
    {
      id: 1,
      name: 'Fruits',
      items: [
        { id: 1, name: 'Apple', calories: 95 },
        { id: 2, name: 'Banana', calories: 105 },
        { id: 3, name: 'Orange', calories: 62 },
        { id: 4, name: 'Strawberry', calories: 33 },
        { id: 5, name: 'Mango', calories: 200 },
      ],
    },
    {
      id: 2,
      name: 'Vegetables',
      items: [
        { id: 6, name: 'Carrot', calories: 25 },
        { id: 7, name: 'Broccoli', calories: 55 },
        { id: 8, name: 'Spinach', calories: 23 },
        { id: 9, name: 'Bell Pepper', calories: 31 },
        { id: 10, name: 'Cucumber', calories: 16 },
      ],
    },
    {
      id: 3,
      name: 'Proteins',
      items: [
        { id: 11, name: 'Chicken Breast', calories: 165 },
        { id: 12, name: 'Tofu', calories: 70 },
        { id: 13, name: 'Lentils', calories: 230 },
        { id: 14, name: 'Eggs', calories: 155 },
        { id: 15, name: 'Salmon', calories: 206 },
      ],
    },
    {
      id: 4,
      name: 'Grains',
      items: [
        { id: 16, name: 'Brown Rice', calories: 215 },
        { id: 17, name: 'Quinoa', calories: 222 },
        { id: 18, name: 'Oats', calories: 150 },
        { id: 19, name: 'Whole Wheat Bread', calories: 80 },
        { id: 20, name: 'Barley', calories: 193 },
      ],
    },
    {
      id: 5,
      name: 'Dairy',
      items: [
        { id: 21, name: 'Milk', calories: 103 },
        { id: 22, name: 'Yogurt', calories: 59 },
        { id: 23, name: 'Cheese', calories: 113 },
        { id: 24, name: 'Cottage Cheese', calories: 206 },
        { id: 25, name: 'Almond Milk', calories: 30 },
      ],
    },
    {
      id: 6,
      name: 'Snacks',
      items: [
        { id: 26, name: 'Almonds', calories: 164 },
        { id: 27, name: 'Chips', calories: 152 },
        { id: 28, name: 'Granola Bar', calories: 100 },
        { id: 29, name: 'Popcorn', calories: 31 },
        { id: 30, name: 'Dark Chocolate', calories: 170 },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div
      style={{
        backgroundImage: "url('https://www.uhc.com/content/dam/uhcdotcom/foundation/blog/benefit-activation/blog-8-nutrients-you-need-every-day-1200x800.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        height: '100vh',
        padding: ' 700px', // Optional padding
      }}
    >
      <div className="food-list">
        <h1>Food Categories</h1>
        <p>Click a category to see details:</p>
        <ul>
          {categories.map((category) => (
            <li key={category.id} onClick={() => handleCategoryClick(category)}>
              {category.name}
            </li>
          ))}
        </ul>

        {selectedCategory && (
          <div className="category-details">
            <h2>{selectedCategory.name} Details</h2>
            <ul>
              {selectedCategory.items.map((item) => (
                <li key={item.id}>
                  {item.name} - {item.calories} calories
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link to="/">Back to Dashboard</Link>
      </div>
    </div>
  );
}

export default FoodList;
