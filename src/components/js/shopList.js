import { getShoppingList } from './localStorageShoppingList';
import { setClassCardShopList } from './setThemePage';
import { dataTheme, LIGHT_THEME } from './localStorageTheme';
import { getShoppingList, setShoppingList } from './localStorageShoppingList';

import url_amazon from '../../images/amazon_icon.png';
import url_book from '../../images/book_icon.png';
import url_books from '../../images/book_icon2.png';
import empty_image from '../../images/empty_list.png';
import url_dump from '../../images/dump.png';

const sectionShopList = document.querySelector('.section_shop_list');

const title = `<div class="wrap_title"><h1 class="title_page">Shopping <span class="color_accent_light">List</span></h1></div>`;
let listBookShopping = [];
let currentPage = 0;
const elementOnPage = 2;

const emptyShopList = `
<div class="empty_shop_list">
<p class="empty_text js_empty_text" >This page is empty, add some books and proceed to order.</p>
<div class="empty_thumb_img">
<img
          class="empty_img"
          src=${empty_image}
          alt="book"
          width="192"
          height="281"
        /></div></div>`;

const getListFromLocalStorage = () => {
  const shoppingList = getShoppingList();
  listBookShopping.length = 0;
  listBookShopping = [...shoppingList];
};

const renderOneCardBook = ({
  id,
  list_name,
  title,
  author,
  book_image,
  buy_links,
}) => {
  return `<div class="container_wrap js_container_wrap" data-idbook="${id}">
  <button type="button" class="btn_dump" data-idbook="${id}"><img
          class="icon_dump"
          src=${url_dump}
          alt="close"
          width="34"
          height="34"
        /></button>
     <div class="thumb_cardbook_img"><img
          class="cardbook_img_book"
          src=${book_image}
          alt="book"
          width="192"
          height="281"
        /></div>
     <div class="shop_cardbook_book_desc">
     <div class="top_wrap">
       <h2 class="cardbook_title">${title}</h2>
       <h3 class="cardbook_subtitle subtitle">${list_name}</h3>
       <p class="shop_text_aboutbook">
         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
         voluptatem corporis velit reprehenderit nisi, similique a. Mollitia
         placeat modi recusandae explicabo sit minus doloremque quo vitae error,
         laboriosam id nostrum.
       </p>
       </div>
       <div class="bottom_wrap">
       <p class="cardbook_author subtitle">${author}</p>
       <div class="cardbook_thumb_icons thumb_icons"><a class="modal__link_book" href=${buy_links[2].url} target="_blank"target="_blank" >
        <img
          class="modal__icon_books"
          src=${url_books}
          alt="logo"
          width="20"
          height="20"
        /></a><a class="modal__link_book" href=${buy_links[1].url} target="_blank" ><img
          class="modal__icon_book"
          src=${url_book}
          alt="logo"
          width="20"
          height="20"
        /></a><a class="modal__link_amazon" href=${buy_links[0].url} target="_blank"><img
          class="modal__icon_amazon"
          src=${url_amazon}
          alt="logo"
          width="62"
          height="19"
        /></a></div>
        
        </div>
     </div>
   </div>
     <div class="container_wrap_mobile js_container_wrap" data-idbook="${id}">
    <button type="button" class="btn_dump_mobile" data-idbook="${id}">
      <img
        class="icon_dump"
        src="${url_dump}"
        alt="close"
        width="34"
        height="34"
      />
    </button>
    <div class="thumb_up_mobile">
      <div class="cardbook_left_mobile">
        <div class="thumb_cardbook_img_mobile">
          <img
            class="cardbook_img_book"
            src="${book_image}"
            alt="book"
            width="192"
            height="281"
          />
        </div>
        <p class="cardbook_author subtitle">${author}</p>
      </div>
      <div class="top_wrap_mobile">
        <h2 class="cardbook_title">${title}</h2>
        <h3 class="cardbook_subtitle subtitle">${list_name}</h3>
        <div class="cardbook_thumb_icons_mobile">
          <a
            class="modal__link_book"
            href="${buy_links[2].url}"
            target="_blank"
            target="_blank"
          >
            <img
              class="modal__icon_books"
              src="${url_books}"
              alt="logo"
              width="20"
              height="20" /></a
          ><a
            class="modal__link_book"
            href="${buy_links[1].url}"
            target="_blank"
            ><img
              class="modal__icon_book"
              src="${url_book}"
              alt="logo"
              width="20"
              height="20" /></a
          ><a
            class="modal__link_amazon"
            href="${buy_links[0].url}"
            target="_blank"
            ><img
              class="modal__icon_amazon"
              src="${url_amazon}"
              alt="logo"
              width="62"
              height="19"
          /></a>
        </div>
      </div>
    </div>
    <p class="shop_text_aboutbook_mobile">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatem
      corporis velit reprehenderit nisi, similique a. Mollitia placeat modi
      recusandae explicabo sit minus doloremque quo vitae error, laboriosam id
      nostrum.
    </p>
  </div>

   `;
};

const renderCardsBooks = () => {
  const start = elementOnPage * currentPage;
  const end = start + elementOnPage;

  const paginateData = listBookShopping.slice(start, end);
  const listCardsBook = paginateData
    .map(({ id, list_name, title, author, book_image, buy_links }) => {
      return renderOneCardBook({
        id,
        list_name,
        title,
        author,
        book_image,
        buy_links,
      });
    })
    .join('');

  const numberPage = document.querySelector('.number_page');
  numberPage.textContent = currentPage + 1;

  const listBooksShopEl = document.querySelector('.js_list_books');
  listBooksShopEl.innerHTML = '';
  listBooksShopEl.insertAdjacentHTML('beforeEnd', listCardsBook);
  const allCards = document.querySelectorAll('.js_container_wrap');
  allCards.forEach(el => el.classList.add('container_wrap_light'));
  setClassCardShopList();
  if (currentPage + 1 === Math.round(listBookShopping.length / elementOnPage)) {
    document.querySelector('.next').disabled = true;
    document.querySelector('.prev').disabled = false;
    return;
  } else {
    document.querySelector('.next').disabled = false;
  }

  if (currentPage === 0) {
    document.querySelector('.prev').disabled = true;
    document.querySelector('.next').disabled = false;
    return;
  } else {
    document.querySelector('.prev').disabled = false;
  }
};

const handlerPaginatPrev = () => {
  currentPage -= 1;
  renderCardsBooks();
};
const handlerPaginatNext = () => {
  currentPage += 1;
  renderCardsBooks();
};

const handleRemoveBook = e => {
  const idBook = e.currentTarget.dataset.idbook;
  let shoppingList = getShoppingList();
  const copyShopList = shoppingList.filter(elem => elem.id !== idBook);

  setShoppingList(copyShopList);
  getListFromLocalStorage();
  renderShopList();
};

const renderShopList = () => {
  sectionShopList.innerHTML = '';
  sectionShopList.insertAdjacentHTML('afterbegin', title);
  if (listBookShopping.length === 0) {
    sectionShopList.insertAdjacentHTML('beforeEnd', emptyShopList);
    const emptyTextEl = document.querySelector('.js_empty_text');
    if (dataTheme === LIGHT_THEME) {
      emptyTextEl.classList.remove('text_secondary_dark');
      emptyTextEl.classList.add('text_secondary_light');
    } else {
      emptyTextEl.classList.add('text_secondary_dark');
      emptyTextEl.classList.remove('text_secondary_light');
    }
  } else {
    sectionShopList.insertAdjacentHTML(
      'beforeEnd',
      ` <div  class="js_list_books list_books">
      </div>
      <div id="tui-pagination-container" class="tui-pagination">
        <button type="button" class="prev btn_pagination"><</button>
        <span class="number_page"></span>
        <button type="button" class="next btn_pagination">></button>
      </div>`
    );
    renderCardsBooks();
    const btnsDump = document.querySelectorAll('.btn_dump');
    btnsDump.forEach(btn => {
      btn.addEventListener('click', handleRemoveBook);
    });
    const btnsDumpMobile = document.querySelectorAll('.btn_dump_mobile');
    btnsDumpMobile.forEach(btn => {
      btn.addEventListener('click', handleRemoveBook);
    });
    const btnPrev = document.querySelector('.prev');
    btnPrev.disabled = true;
    const btnNext = document.querySelector('.next');
    btnPrev.classList.add('btn_light');
    btnNext.classList.add('btn_light');
    btnPrev.addEventListener('click', handlerPaginatPrev);
    btnNext.addEventListener('click', handlerPaginatNext);
  }
};

export const loadShopList = () => {
  getListFromLocalStorage();
  renderShopList();
};
