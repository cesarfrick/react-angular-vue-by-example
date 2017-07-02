import axios from 'axios';

function getFaqs() {
  const url = 'http://jsonplaceholder.typicode.com/posts';

  return axios({
    url,
    responseType: 'json',
  });
}

export default { getFaqs };
