
import axios from 'axios';

export default async function fetchImages(value, page) {
  const url = 'https://pixabay.com/api/';
  const key = '31316931-6ed528a434bb816a44241a448';
  const filter = `?key=${key}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

  return await axios.get(`${url}${filter}`).then(response => response.data);
}

const url = 'https://pixabay.com/api/';
const key = '31316931-6ed528a434bb816a44241a448';
const filter = `?key=${key}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

export const getProducts = async ((value, page) = {}) => {
  const params = new URLSearchParams({
    q: searchQuery,
   });

  const response = await fetch(`${url}${filter}`);

  if (!response.ok) {
    throw new Error("smth went wrong");
  }

  return response.json();
};