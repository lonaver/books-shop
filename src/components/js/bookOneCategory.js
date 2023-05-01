import { fetchBooksOneCategoty } from './fetchBooksOneCategoty';
import { renderOneBook } from './renderBooks';
import { addEvent } from './modal';
import { setClassSubtitleAuthor } from './setThemePage';
import { dataTheme, LIGHT_THEME } from './localStorageTheme';

const listBooks = document.querySelector('.all_books_list');
const btnAllCategories = document.querySelector('.btn_all_categories');

const renderTitle = categotyTitle => {
  const titleHomeEl = document.querySelector('.title_page');
  const arrayTitle = categotyTitle.trim().split(' ');
  console.dir(arrayTitle);
  const length = arrayTitle.length;
  const lastWord = arrayTitle.pop();

  const firstPart = arrayTitle.slice(0, length - 1).join(' ');

  const title = `${firstPart}<span class="color_accent_light"> ${lastWord}</span>`;
  titleHomeEl.innerHTML = '';
  titleHomeEl.insertAdjacentHTML('beforeEnd', title);
};

const renderBooks = (arrayBooks, categoryTitle) => {
  listBooks.innerHTML = '';
  const cardsBooks = arrayBooks
    .map(
      ({
        book_image,
        book_image_height,
        book_image_width,
        author,
        title,
        _id,
      }) => {
        return renderOneBook(
          book_image,
          book_image_height,
          book_image_width,
          author,
          title,
          _id
        );
      }
    )
    .join(' ');
  listBooks.innerHTML = '';
  listBooks.insertAdjacentHTML('afterbegin', cardsBooks);
  listBooks.classList.remove('js_all_categories');
  listBooks.classList.add('js_one_category');
  console.log('befor title', categoryTitle);
  renderTitle(categoryTitle);
  const openModalBtn = document.querySelectorAll('.data_modal_open');
  openModalBtn.forEach(book => book.addEventListener('click', addEvent));
  setClassSubtitleAuthor();
};

const loadBooks = async category => {
  try {
    const topBooks = await fetchBooksOneCategoty(category);
    renderBooks(topBooks.data, category);
  } catch (error) {
    console.log(error.message);
  }
};

export const loadBooksOneCategory = category => {
  btnAllCategories.classList.remove('btn_category_active_light');
  btnAllCategories.classList.remove('btn_category_active_dark');
  const categorySearch = `[data-category="${category}"]`;
  const categoryEl = document.querySelector(categorySearch);
  //console.log('categorySearch ', categoryEl);
  if (dataTheme === LIGHT_THEME) {
    categoryEl.classList.add('btn_category_active_light');
  } else {
    categoryEl.classList.add('btn_category_active_dark');
  }
  loadBooks(category);
};
