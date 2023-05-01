import axios from 'axios';

export async function fetchTopBooks() {
  const response = await axios.get(`/books/top-books`);
  return response;
}
