import axios from './../axios/axios';

const usersAPI = {
  /**
   * Получает данные списока пользователей
   * @param {number} currentPage - Номер текущей страницы
   * @param {number} pageSize - Количество пользователей на странице
   * @returns {Promise} Promise запроса на сервер
   */
  getUsers(currentPage = 1, pageSize = 20) {
    return axios
      .get(`/users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
};

export default usersAPI;
