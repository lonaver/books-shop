export const renderOneBook = (
  book_image,
  book_image_height,
  book_image_width,
  author,
  title,
  _id
) => {
  return `<li class="card_book" >
    <div class="thumb_book data_modal_open" >
    <img src=${book_image} widtht=${book_image_width} height=${book_image_height} data-id=${_id}>
    </div>
    <div class="book_title">
    <p class="author_book">${author}</p>
    <p class="subtitle_book subtitle">${title}</p>
    </div>
    </li>`;
};

export const renderBooks = arrayBooks => {
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
  return cardsBooks;
};
