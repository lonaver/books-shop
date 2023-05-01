import { fetchTopBooks } from './fetchTopBooks';
import { loadBooksOneCategory } from './bookOneCategory';
import { renderBooks } from './renderBooks';
import { addEvent } from './modal';
import {
  setClassSubtitleAuthor,
  setClassBtn,
  setClassTopCategories,
} from './setThemePage';

const listBooks = document.querySelector('.all_books_list');
const titleHomeEl = document.querySelector('.title_page');

const loadBooksOne = e => {
  loadBooksOneCategory(e.target.dataset['category']);
};

const renderOneCategory = (list_name, books) => {
  return `<li class="category_books">
    <h3 class="books_subtitle books_subtitle_light">${list_name}</h3>
    <ul class="books_list_one">
    ${renderBooks(books)}
  </ul>
  <button type="button" class="btn btn_more" data-category="${list_name.slice(
    0,
    list_name.length
  )}">see more</button>
  </li>`;
};

const renderCategoriesTopBooks = arrayCategories => {
  const cardsCategory = arrayCategories
    .map(({ list_name, books }) => {
      return renderOneCategory(list_name, books);
    })
    .join(' ');
  listBooks.innerHTML = '';
  listBooks.insertAdjacentHTML('beforeEnd', cardsCategory);
  listBooks.classList.remove('js_one_category');
  listBooks.classList.add('js_all_categories');
  const btnsMore = document.querySelectorAll('.btn_more');
  btnsMore.forEach(btnMore => {
    btnMore.addEventListener('click', loadBooksOne);
  });

  const openModalBtn = document.querySelectorAll('.data_modal_open');
  openModalBtn.forEach(btn => btn.addEventListener('click', addEvent));
  setClassSubtitleAuthor();
  setClassBtn();
};

const loadBooks = async () => {
  try {
    const topBooks = await fetchTopBooks();

    renderCategoriesTopBooks(topBooks.data);
  } catch (error) {
    console.log(error.message);
  }
};

const renderTitle = () => {
  const title = `Best Sellers <span class="color_accent_light">Books</span>`;
  titleHomeEl.innerHTML = '';
  titleHomeEl.insertAdjacentHTML('beforeEnd', title);
};

export const loadTopBooks = () => {
  loadBooks();
  renderTitle();
  setClassTopCategories();
};
