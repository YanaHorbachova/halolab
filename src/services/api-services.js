import axios from 'axios';

axios.defaults.baseURL = 'https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e';

function fetchCards() {
    return axios.get();
  }

  export default fetchCards;