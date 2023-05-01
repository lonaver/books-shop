import url_child from '../../images/image_child@1x.png';
import url_hope from '../../images/image_hope@1x.png';
import url_hunger from '../../images/image_hunger@1x.png';
import url_med from '../../images/image_med@1x.png';
import url_prytula from '../../images/image_prytula@1x.png';
import url_razom from '../../images/image_razom@1x.png';
import url_sans from '../../images/image_sans@1x.png';
import url_united from '../../images/image_united@1x.png';
import url_vision from '../../images/image_vision@1x.png';
import url_vector from '../../images/Vector@1x.png';

const support_resource = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: url_child,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: url_hope,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: url_united,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: url_med,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: url_sans,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: url_razom,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: url_hunger,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: url_vision,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: url_prytula,
  },
];

const companyUL = document.querySelector('.company');
const emblemSpan = document.querySelector('.emblem');
const btnSupportPaginat = document.querySelector('.btn_support_padding');

let currentPage = 0;
let elementOnPage = 6;
let totalPages = 0;

const renderOneCompany = (title, url, img, i) => {
  return `<li class="item">
      <a class="link_flex" href=${url} aria-label="link support" target="_blank">
        <span class="item_number" > ${i} </span>
        <img
          class="company__img"
          src=${img}
          alt=${title}
          width="129"
      /></a>
    </li>`;
};

const renderSupport = () => {
  //console.dir(support_resource);
  if (window.innerWidth < 769) elementOnPage = 4;
  totalPages = Math.ceil(support_resource.length / elementOnPage);
  const start = elementOnPage * currentPage;
  const end = start + elementOnPage;

  const paginateData = [...support_resource].slice(start, end);
  const listsCompany = paginateData
    .map(({ title, url, img }, i) => {
      let nom = i + start < 9 ? '0' + (i + start + 1) : '' + (i + 1);
      return renderOneCompany(title, url, img, nom);
    })
    .join('');
  companyUL.innerHTML = '';
  companyUL.insertAdjacentHTML('beforeEnd', listsCompany);
  const itemNumberEl = document.querySelectorAll('.item_number');
  itemNumberEl.forEach(el => el.classList.add('theme_light_support'));
};

const renderEmblem = () => {
  const tagImg = `<img
      class="company__img"
      src=${url_vector}
      alt="logo"
      width="20"
  />`;
  emblemSpan.insertAdjacentHTML('beforeEnd', tagImg);
};

const handlerPaginatSupport = () => {
  currentPage + 1 === totalPages ? (currentPage = 0) : (currentPage += 1);
  renderSupport();
};

export const loadSupport = () => {
  renderEmblem();
  renderSupport();
  btnSupportPaginat.addEventListener('click', handlerPaginatSupport);
};
