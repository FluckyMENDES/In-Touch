import axios from './../axios/axios';

const authAPI = {
  /**
   * Авторизовывает пользователя
   * @returns {Promise} Promise запроса на сервер
   */
  getProfile() {
    return axios.get(`/auth/me`);
  },
  login(email, password, rememberMe = false) {
    return axios.post(`/auth/login`, { email, password, rememberMe });
  },
  logout() {
    return axios.delete(`/auth/login`);
  },
};

export default authAPI;
