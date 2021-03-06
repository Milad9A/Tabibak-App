import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://tabibak-api.herokuapp.com/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'users/public-info');
  }

  getUserBoard() {
    return axios.get(API_URL + 'users/me', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();
