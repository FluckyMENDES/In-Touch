import axios from './../axios/axios';

const followAPI = {
  /**
   * Добавляет пользователя в друзья
   * @param {number} userId - Идентифкатор пользователя
   * @returns {Promise} Promise запроса на сервер
   */
  follow(userId) {
    return axios.post(`/follow/${userId}`);
  },
  unfollow(userId) {
    return axios.delete(`/follow/${userId}`);
  },
};

export default followAPI;
