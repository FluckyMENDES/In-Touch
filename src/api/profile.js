import axios from './../axios/axios';

const profileAPI = {
  /**
   * Получает данные конкретного пользователя
   * @param {number} userId - Идентификатор пользователя
   * @returns {Promise} Promise запроса на сервер
   */
  getProfile(userId) {
    return axios.get(`/profile/${userId}`).then((response) => response.data);
  },
  /**
   * Получает статус конкретного пользователя
   * @param {number} userId - Идентификатор пользователя
   * @returns {Promise} Promise запроса на сервер
   */
  getStatus(userId) {
    return axios.get(`/profile/status/${userId}`);
  },
  /**
   * Устанавливает новый статус текущего пользователя
   * @param {string} status - Текст нового статуса
   * @returns {Promise} Promise запроса на сервер
   */
  setStatus(status) {
    return axios.put(`/profile/status`, { status });
  },
};

export default profileAPI;
