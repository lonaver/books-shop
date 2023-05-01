import { CURRENT_PAGE_HOME } from './valuesCurrentPage';
import { handlerOpenMenu } from './menu';
import {
  setTheme,
  getTheme,
  dataTheme,
  LIGHT_THEME,
  DARK_THEME,
} from './localStorageTheme';

import {
  setClassByTheme,
  setClassTitle,
  btnCategories,
  setClassSubtitleAuthor,
  setClassBtn,
  setClassHeader,
} from './setThemePage';

import url_logoSite from '../../images/logoSite.png';
import url_bookSite from '../../images/Book.png';
import url_photoUser from '../../images/photoUser.png';
import url_btnUser from '../../images/btnUser.png';
import url_switcherDark from '../../images/SwitcherDark.png';
import url_switcherLight from '../../images/SwitcherLight.png';
import url_bookSiteDark from '../../images/Book_dark.png';
import url_alignLeft from '../../images/align-left.svg';

const headerLeft = document.querySelector('.header_left');
const headerRight = document.querySelector('.header_right');
let currenPageForRender = CURRENT_PAGE_HOME;

const leftHeader = ` <a class="link header_logo_link" href="./index.html" aria-label="logo">
        <img
          class="company_img_logo"
          src=${url_logoSite}
          alt="logo"
          width="25"
          height="25"
      /><img
          class="company__img_book"
          src=${dataTheme === LIGHT_THEME ? url_bookSite : url_bookSiteDark}
          alt="logo"
          width="53"
          height="17"
      />
      </a
      >
      <a class="header_link_home header_link  page" href="./index.html">Home</a>
      <a class="header_link_shopping header_link current_page" href="./shoppingList.html">Shopping list</a>`;

const rightHeader = `<label class="theme_label">
        <input
          class="theme_check"
          type="checkbox"
          name="check-theme"
          value=""
          checked="false"
        />
        <img
          class="switcher"
          src=""
          alt="switcher"
          width="40"
          height="24"
      />
      </label>
      <button type="button" class="btn_menu js-open-menu" aria-expanded="false" aria-controls="mobile-menu"><img
          class="menu_icon_header"
          src=${url_alignLeft}
          alt="menu_header"
          width="28"
          height="28"
      /></button>

      <a class="header_link_auth" href="">
        <div class="thumb_photo">
          <img class="photo_user" src=${url_photoUser} alt="photo user" />
        </div> 
         <span class="name_user">Stephan</span>
         <button type="button" class="btn_menu"><img
          class="user_img_btn"
          src=${url_btnUser}
          alt="logo"
          width="23"
          height="26"
      /></button>
      
      </a>`;

const renderLeftSide = currentPage => {
  headerLeft.insertAdjacentHTML('beforeEnd', leftHeader);
  const homePage = document.querySelector('.header_link_home');
  const shoppingPage = document.querySelector('.header_link_shopping');
  if (currentPage === CURRENT_PAGE_HOME) {
    homePage.classList.replace('page', 'current_page');
    shoppingPage.classList.replace('current_page', 'page');
  } else {
    shoppingPage.classList.add('page');

    shoppingPage.classList.replace('page', 'current_page');
    homePage.classList.replace('current_page', 'page');
  }
};

const renderRightSide = currentPage => {
  headerRight.insertAdjacentHTML('beforeEnd', rightHeader);
  const textBtn = document.querySelector('.name_user');
  textBtn.classList.add('text_light');

  const btnOpenMenu = document.querySelector('.js-open-menu');
  console.log('reenderRight', currentPage);
  btnOpenMenu.addEventListener('click', () => {
    handlerOpenMenu(currentPage);
  });
};

const toLocalStorage = e => {
  const switcherImg = document.querySelector('.switcher');
  let theme = dataTheme;
  if (e.target.checked) {
    theme = DARK_THEME;
  } else {
    theme = LIGHT_THEME;
  }
  setTheme(theme);
  if (theme === LIGHT_THEME) {
    switcherImg['src'] = url_switcherLight;
  } else {
    switcherImg['src'] = url_switcherDark;
  }
  getTheme();
  setClassHeader();
  if (currenPageForRender === CURRENT_PAGE_HOME) {
    setClassByTheme();
    btnCategories();
    setClassSubtitleAuthor();
    setClassBtn();
    setClassTitle();
  } else {
    setClassByTheme();
    setClassCardShopList();
    setClassBtn();
    setClassTitle();
  }
};

const getThemeOnCheck = () => {
  const switcherImg = document.querySelector('.switcher');
  const themeCheck = document.querySelector('.theme_check');

  themeCheck.addEventListener('change', toLocalStorage);
  if (dataTheme === LIGHT_THEME) {
    switcherImg['src'] = url_switcherLight;
    switcherImg['value'] = LIGHT_THEME;
    switcherImg['checked'] = false;
  } else {
    switcherImg['src'] = url_switcherDark;
    switcherImg['value'] = DARK_THEME;
    switcherImg['checked'] = true;
  }
};

export const renderHeader = currentPage => {
  currenPageForRender = currentPage;

  getTheme();
  renderLeftSide(currentPage);
  renderRightSide(currentPage);

  getThemeOnCheck();
  setClassHeader();
};
