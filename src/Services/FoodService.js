import axios from '../utils/axiosConfig';

const getFoodList = () => {
  return axios.get('/foods');
};

export default {
  getFoodList
};
