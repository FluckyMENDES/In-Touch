import axios from './../axios/axios';

const authAPI = {
  /**
   * Авторизовывает пользователя
   * @returns {Promise} Promise запроса на сервер
   */
  getProfile() {
    return axios.get(`/auth/me`);
  },
};

export default authAPI;
