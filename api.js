import axios from 'axios';

const fetchArticles = async (theUrl) => {
  try {
    const response = await axios.get(theUrl);

    return response;
  } catch(err) {
    console.log(err);
  }
}

export default {
  fetchArticles
}