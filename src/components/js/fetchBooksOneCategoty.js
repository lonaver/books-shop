import axios from 'axios';

export async function fetchBooksOneCategoty(category) {
  const response = await axios.get(`/books/category?category=${category}`);
  return response;
}
