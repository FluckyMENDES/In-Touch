import axios from './../axios/axios';

const authAPI = {
  /**
   * Авторизовывает пользователя
   * @returns {Promise} Promise запроса на сервер
   */
  getProfile() {
    return axios.get(`/auth/me`);
  },
  auth(data) {
    return axios.post(`/auth/login`, data);
  },
};

export default authAPI;
