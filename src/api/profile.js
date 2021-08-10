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
};

export default profileAPI;
