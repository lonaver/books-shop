import { getTheme, dataTheme, LIGHT_THEME } from './localStorageTheme';
import url_bookSite from '../../images/Book.png';
import url_bookSiteDark from '../../images/Book_dark.png';

const body = document.querySelector('body');

export const setClassModule = () => {
  getTheme();
  console.log('modal', dataTheme);
  const containerModal = document.querySelector('.modal');
  const modalTextRemove = document.querySelector('.js_modal_text_remove');
  const btnModal = document.querySelectorAll('.btn_modal');

  if (dataTheme === LIGHT_THEME) {
    containerModal.classList.add('modal_light');
    containerModal.classList.remove('modal_dark');
    modalTextRemove.classList.add('text_secondary_light');
    modalTextRemove.classList.remove('text_secondary_dark');
    btnModal.forEach(btn => {
      btn.classList.add('btn_light');
      btn.classList.remove('btn_dark');
    });
  } else {
    containerModal.classList.remove('modal_light');
    containerModal.classList.add('modal_dark');
    modalTextRemove.classList.remove('text_secondary_dark');
    modalTextRemove.classList.add('text_secondary_light');
    btnModal.forEach(btn => {
      btn.classList.remove('btn_light');
      btn.classList.add('btn_dark');
    });
  }
};

export const setClassHeader = () => {
  const containerHead = document.querySelector('.header_container');
  const pageHead = document.querySelector('.page');
  const logoBook = document.querySelector('.company__img_book');
  if (dataTheme === LIGHT_THEME) {
    containerHead.classList.add('header_container_light');
    containerHead.classList.remove('header_container_dark');
    pageHead.classList.add('page_light');
    pageHead.classList.remove('page_dark');
    logoBook.src = url_bookSite;
  } else {
    containerHead.classList.remove('header_container_light');
    containerHead.classList.add('header_container_dark');
    pageHead.classList.remove('page_light');
    pageHead.classList.add('page_dark');
    logoBook.src = url_bookSiteDark;
  }
};

export const setClassCardShopList = () => {
  const containerWrap = document.querySelectorAll('.js_container_wrap');

  if (dataTheme === LIGHT_THEME) {
    containerWrap.forEach(el => {
      el.classList.add('container_wrap_light');
      el.classList.remove('container_wrap_dark');
    });
  } else {
    containerWrap.forEach(el => {
      el.classList.remove('container_wrap_light');
      el.classList.add('container_wrap_dark');
    });
  }
};

export const setClassTopCategories = () => {
  const categoryElLight = document.querySelector('.btn_category_active_light');
  const categoryElDark = document.querySelector('.btn_category_active_dark');
  if (categoryElLight)
    categoryElLight.classList.remove('.btn_category_active_light');
  if (categoryElDark)
    categoryElDark.classList.remove('.btn_category_active_dark');

  const btnAllCategories = document.querySelector('.btn_all_categories');
  btnAllCategories.classList.add('btn_category_active_light');

  if (dataTheme === LIGHT_THEME) {
    btnAllCategories.classList.contains('btn_category_active_dark') &&
      btnAllCategories.classList.replace(
        'btn_category_active_dark',
        'btn_category_active_light'
      );
  } else {
    btnAllCategories.classList.contains('btn_category_active_light') &&
      btnAllCategories.classList.replace(
        'btn_category_active_light',
        'btn_category_active_dark'
      );
  }
};

export const btnCategories = () => {
  const allCategoriesSection = document.querySelectorAll('.btn_category');
  const activeBtnLight = document.querySelector('.btn_category_active_light');
  const activeBtnDark = document.querySelector('.btn_category_active_dark');

  if (dataTheme === LIGHT_THEME) {
    allCategoriesSection.forEach(btn => {
      btn.classList.add('btn_category-light_theme');
      btn.classList.remove('btn_category-dark_theme');
    });
    activeBtnDark &&
      activeBtnDark.classList.replace(
        'btn_category_active_dark',
        'btn_category_active_light'
      );
  } else {
    allCategoriesSection.forEach(btn => {
      btn.classList.remove('btn_category-light_theme');
      btn.classList.add('btn_category-dark_theme');
    });
    activeBtnLight &&
      activeBtnLight.classList.replace(
        'btn_category_active_light',
        'btn_category_active_dark'
      );
  }
};

export const setClassTitle = () => {
  const titlePage = document.querySelector('.title_page');

  console.log('title', dataTheme);
  if (dataTheme === LIGHT_THEME) {
    titlePage.classList.contains('title_page_dark')
      ? titlePage.classList.replace('title_page_dark', 'title_page_light')
      : titlePage.classList.add('title_page_light');
  } else {
    titlePage.classList.contains('title_page_light')
      ? titlePage.classList.replace('title_page_light', 'title_page_dark')
      : titlePage.classList.add('title_page_dark');
  }
};

export const setClassSubtitleAuthor = () => {
  const titleAuthor = document.querySelectorAll('.author_book');
  if (dataTheme === LIGHT_THEME) {
    titleAuthor.forEach(el => {
      el.classList.add('author_book_light');
      el.classList.remove('author_book_dark');
    });
  } else {
    titleAuthor.forEach(el => {
      el.classList.remove('author_book_light');
      el.classList.add('author_book_dark');
    });
  }
};

export const setClassBtn = () => {
  const btnAll = document.querySelectorAll('.btn');
  if (dataTheme === LIGHT_THEME) {
    btnAll.forEach(btn => {
      btn.classList.add('btn_light');
      btn.classList.remove('btn_dark');
    });
  } else {
    btnAll.forEach(btn => {
      btn.classList.remove('btn_light');
      btn.classList.add('btn_dark');
    });
  }
};

export const setClassByTheme = () => {
  if (dataTheme === LIGHT_THEME) {
    body.classList.add('light_theme');
    body.classList.remove('dark_theme');
  } else {
    body.classList.remove('light_theme');
    body.classList.add('dark_theme');
  }
};
