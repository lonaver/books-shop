import axios from 'axios';

export async function fetchOneBook(book_id) {
  const response = await axios.get(
    `https://books-backend.p.goit.global/books/${book_id}`
  );
  return response;
}
