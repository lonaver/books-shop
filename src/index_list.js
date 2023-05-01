import './components/js/defaultUrl';
import { loadSupport } from './components/js/support';
import { renderHeader } from './components/js/header';

import { loadShopList } from './components/js/shopList';
import { CURRENT_PAGE_SHOP } from './components/js/valuesCurrentPage';
import {
  setClassByTheme,
  setClassTitle,
  setClassCardShopList,
  setClassHeader,
} from './components/js/setThemePage';

const body = document.querySelector('body');
body.classList.add('light_theme');

const loadShopPage = () => {
  renderHeader(CURRENT_PAGE_SHOP);
  loadSupport();
  loadShopList();

  setClassByTheme();
  setClassHeader();
  setClassTitle();
  setClassCardShopList();
};

window.addEventListener('load', loadShopPage);
