import axios from "axios";

const apiUrl = "https://api.github.com/";

export const getUsers = location =>
  axios.get(
    `${apiUrl}search/users?q=location:${location}&sort:followers&page=1&per_page=10`
  );

export const getUser = login => axios.get(`${apiUrl}users/${login}`);
