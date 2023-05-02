import { fetchOneBook } from './fetchOneBook';
import { getShoppingList, setShoppingList } from './localStorageShoppingList';
import { setClassModule } from './setThemePage';
import { getTheme, dataTheme, DARK_THEME } from './localStorageTheme';

import url_close from '../../images/close.svg';
import url_amazon from '../../images/amazon_icon.png';
import url_book from '../../images/book_icon.png';
import url_books from '../../images/book_icon2.png';

const backDropEl = document.querySelector('.backdrop');
const thumbIcons = document.querySelector('.thumb_icons');
const thumbImgBook = document.querySelector('.thumb_modal_img');
const btnClose = document.querySelector('.modal__btn_close');

const modal = document.querySelector('.data_modal');

const btnAdd = document.querySelector('.js_btn_add');
const btnRemove = document.querySelector('.js_btn_remove');
const textRemove = document.querySelector('.js_modal_text_remove');

let listBookShopping = [];
let idBook = '';

const toggleModal = () => {
  modal.classList.toggle('is-hidden');
  const btnCloseIconForStyle = document.querySelector('.modal__icon_close');

  if (dataTheme === DARK_THEME) {
    btnCloseIconForStyle.classList.add('modal__icon_close_dark');
  } else {
    btnCloseIconForStyle.classList.remove('modal__icon_close_dark');
  }
};

const btnCloseIcon = `<img
          class="modal__icon_close"
          alt="close"
          width="18"
          height="18"
           src=${url_close}
        />`;

const renderModalWindow = () => {
  btnClose.innerHTML = '';
  btnClose.insertAdjacentHTML('beforeEnd', btnCloseIcon);
};

const renderCardBook = ({
  _id,
  list_name,
  title,
  author,
  book_image,
  buy_links,
}) => {
  let shoppingList = getShoppingList();
  listBookShopping.length = 0;
  listBookShopping = [...shoppingList];
  let isInShopList = false;
  if (listBookShopping.length !== 0) {
    isInShopList = shoppingList.find(elem => elem.id === _id) ? true : false;
  }
  const imgBook = `<img
          class="modal_img_book"
          src=${book_image}
          alt="book"
          width="192"
          height="281"
        />`;
  thumbImgBook.innerHTML = '';
  thumbImgBook.insertAdjacentHTML('beforeEnd', imgBook);
  const modalTitle = document.querySelector('.modal_title');
  modalTitle.textContent = title;
  const modalSubtitle = document.querySelector('.modal_subtitle');
  modalSubtitle.textContent = author;

  const companyIcons = `<a class="modal__link_amazon" href=${buy_links[0].url} target="_blank"><img
          class="modal__icon_shoplink"
          src=${url_amazon}
          alt="logo"
          width="62"
          height="19"
        /></a><a class="modal__link_book" href=${buy_links[1].url} target="_blank" ><img
          class="modal__icon_shoplink"
          src=${url_book}
          alt="logo"
          width="20"
          height="20"
        /></a><a class="modal__link_books" href=${buy_links[2].url} target="_blank" >
        <img
          class="modal__icon_shoplink"
          src=${url_books}
          alt="logo"
          width="20"
          height="20"
        /></a>`;
  thumbIcons.innerHTML = '';
  thumbIcons.insertAdjacentHTML('beforeEnd', companyIcons);
  const iconShoplink = document.querySelectorAll('.modal__icon_shoplink');
  iconShoplink.forEach(icon => {
    if (dataTheme === DARK_THEME) {
      icon.classList.add('modal__icon_dark');
      icon.classList.remove('modal__icon_light');
    } else {
      icon.classList.add('modal__icon_light');
      icon.classList.remove('modal__icon_dark');
    }
  });

  if (isInShopList) {
    btnAdd.style.display = 'none';
    btnRemove.style.display = 'flex';
    textRemove.style.display = 'flex';
  } else {
    const newBookShopping = {
      id: _id,
      list_name: list_name,
      title: title,
      author: author,
      book_image: book_image,
      buy_links: buy_links,
    };
    listBookShopping.push(newBookShopping);
    btnRemove.style.display = 'none';
    textRemove.style.display = 'none';
    btnAdd.style.display = 'flex';
  }
};

const loadInformationOneBook = async idBook => {
  try {
    const oneBookInfo = await fetchOneBook(idBook);
    renderCardBook(oneBookInfo.data);
  } catch (error) {
    console.log(error.message);
  }
};

const addEventClose = e => {
  e.preventDefault();
  toggleModal();
};

const removeEvent = () => {
  document.removeEventListener('keydown', handlerKeyEsc);
  backDropEl.removeEventListener('click', handleCloseModal);
};

const handlerKeyEsc = e => {
  e = e || window.event;

  let isEscape = false;
  if ('key' in e) {
    isEscape = e.key === 'Escape' || e.key === 'Esc';
  } else {
    isEscape = e.keyCode === 27;
  }
  if (isEscape) {
    toggleModal();
    removeEvent();
  }
};

const handleCloseModal = e => {
  if (e.currentTarget === e.target) {
    toggleModal();
    removeEvent();
  }
};

const handlerBtnAdd = () => {
  setShoppingList(listBookShopping);
  toggleModal();
  removeEvent();
};

const removeBookFromLocalStorage = () => {
  let shoppingList = getShoppingList();
  const copyShopList = shoppingList.filter(elem => elem.id !== idBook);
  setShoppingList(copyShopList);
};

const handlerBtnRemove = () => {
  removeBookFromLocalStorage();
  toggleModal();
  removeEvent();
};

export const addEvent = e => {
  e.preventDefault();
  idBook = e.target.dataset.id;
  setClassModule();
  toggleModal();

  loadInformationOneBook(idBook);
  document.addEventListener('keydown', handlerKeyEsc);
  backDropEl.addEventListener('click', handleCloseModal);
};

export const modalRender = () => {
  getTheme();
  renderModalWindow();
  const closeModalBtn = document.querySelector('.data_modal_close');
  closeModalBtn.addEventListener('click', addEventClose);
  btnAdd.addEventListener('click', handlerBtnAdd);
  btnRemove.addEventListener('click', handlerBtnRemove);
  setClassModule();
};
