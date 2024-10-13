// src/Services/UserService.js
import axios from 'axios';

const UserService = {
    signup: async ({ name, email, password }) => {
        const response = await axios.post('/api/signup', { name, email, password });
        return response.data; // Ensure this returns a success response
    },
    // Other methods...
};

export default UserService;
