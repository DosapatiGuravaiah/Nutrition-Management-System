import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  // Initial state for profile fields (you can pre-fill these with user data)
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [password, setPassword] = useState('');

  // Handle form submission for profile update
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Add logic to save updated profile details
    console.log('Profile updated:', { name, email, password });
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      <form onSubmit={handleProfileUpdate} className="profile-form">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter new password"
        />
        
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default Profile;
