import axios from '../utils/axiosConfig';

const createDietPlan = (plan) => {
  return axios.post('/diet-plan', plan);
};

export default {
  createDietPlan
};
