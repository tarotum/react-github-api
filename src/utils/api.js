import axios from 'axios';

const apiUrl = 'https://api.github.com/';

export default {
  getUsers: location =>
    axios.get(
      `${apiUrl}search/users?q=location:${location || 'Odessa'}&sort:followers&page=1&per_page=10`
    )
};
