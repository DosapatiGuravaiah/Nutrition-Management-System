import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import UserService from '../Services/UserService'; // Adjust import according to your structure
import './SignUp.css';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Apply the background image to the body when the component mounts
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?cs=srgb&dl=pexels-pixabay-235986.jpg&fm=jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";

        // Clean up the background image when the component unmounts
        return () => {
            document.body.style.backgroundImage = '';
        };
    }, []);

    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{10}$/; // 10-digit phone number validation
        return phoneRegex.test(phone);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError('');

        if (!validatePhone(phone)) {
            setError('Invalid phone number. Must be 10 digits.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        if (!validatePassword(password)) {
            setError('Password must be at least 8 characters long and include an uppercase letter, lowercase letter, number, and special character.');
            return;
        }

        try {
            await UserService.signup({ name, email, password, phone });
            navigate('/login'); // Navigate to the Login page after successful signup
        } catch (error) {
            setError('Signup failed. Please try again.');
            console.error('Signup failed', error);
        }
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSignUp} className="signup-form">
                <h2>Sign Up</h2>
                {error && <p className="error-message">{error}</p>}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirm-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        required
                    />
                </div>
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
            <Link to="/" className="back-link">Back to Dashboard</Link>
        </div>
    );
}

export default SignUp;
