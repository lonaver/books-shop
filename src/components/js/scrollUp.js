import url_scrollUp from '../../images/up.svg';

const mybutton = document.querySelector('.scroll_up');

export function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  console.log('scrollUp');
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

mybutton.addEventListener('click', topFunction);
const tagImgScrollUp = `<img
      class="img_scroll_up"
      src=${url_scrollUp}
      alt="logo"
      width="64"
      height="64"
  />`;
mybutton.insertAdjacentHTML('beforeEnd', tagImgScrollUp);
