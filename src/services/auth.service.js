import axios from 'axios';

const API_URL = 'https://tabibak-api.herokuapp.com/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'users/login', {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'users', {
      name: user.fullName,
      userName: user.userName,
      email: user.email,
      password: user.password,
      medicalHistory: user.medicalHistory,
      phoneNumber: user.phoneNumber,
      gender: user.gender,
    });
  }
}

export default new AuthService();
