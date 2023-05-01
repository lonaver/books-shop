import { fetchCategories } from './fetchCategories';
import { loadBooksOneCategory } from './bookOneCategory';
import { loadTopBooks } from './topBooks';
import { dataTheme, LIGHT_THEME } from './localStorageTheme';
import { btnCategories } from './setThemePage';

const categoriesSection = document.querySelector('.categories_list');
const btnAllCategories = document.querySelector('.btn_all_categories');

const renderOneCategory = list_name => {
  return `<li class="category">
  <button type="button" class="btn_category" data-category="${list_name.slice(
    0,
    list_name.length
  )}">${list_name} </button>
  </li>`;
};

const loadBooksOne = e => {
  const nameCategory = e.target.dataset.category;
  console.log('load books one', nameCategory);
  const allCategories = document.querySelectorAll('.btn_category');
  if (dataTheme === LIGHT_THEME) {
    allCategories.forEach(btn =>
      btn.classList.remove('btn_category_active_light')
    );
    e.target.classList.add('btn_category_active_light');
  } else {
    allCategories.forEach(btn =>
      btn.classList.remove('btn_category_active_dark')
    );
    e.target.classList.add('btn_category_active_dark');
  }
  if (nameCategory === 'all categories') return;
  loadBooksOneCategory(nameCategory.trim());
};

btnAllCategories.addEventListener('click', loadTopBooks);

const renderCategories = arrayCategories => {
  const cardsCategories = arrayCategories
    .map(({ list_name }) => {
      return renderOneCategory(list_name);
    })
    .join('');
  categoriesSection.insertAdjacentHTML('beforeEnd', cardsCategories);
  const categoryEl = document.querySelectorAll('.category');
  categoryEl.forEach(el => el.addEventListener('click', loadBooksOne));
};

const responseFetchCategories = async () => {
  try {
    const data = await fetchCategories();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const loadCategories = async () => {
  try {
    const categoriesAll = await responseFetchCategories();
    const arrayData = [...categoriesAll.data];
    renderCategories(arrayData);
    btnCategories();
  } catch (error) {
    console.log(error.message);
  }
};

export const loadFirst = () => {
  loadCategories();
};
