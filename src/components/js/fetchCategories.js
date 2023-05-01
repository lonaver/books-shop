import axios from 'axios';

export async function fetchCategories() {
  const response = await axios.get(`books/category-list`);
  return response;
}
