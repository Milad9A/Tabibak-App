import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://tabibak-api.herokuapp.com/';

class SubjectService {
  getSubjects() {
    return axios.get(API_URL + 'subjects', { headers: authHeader() });
  }
}

export default new SubjectService();
