import { getAuthors, getFaveAuthors } from '../api/authorData';
import { booksOnSale, getBooks, searchBooks } from '../api/bookData';
import { showAuthors } from '../pages/authors';
import { emptyBooks, showBooks } from '../pages/books';
import { signOut } from '../utils/auth';

// navigation events
const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // BOOKS ON SALE
  document.querySelector('#sale-books').addEventListener('click', () => {
    booksOnSale().then(showBooks);
  });

  //  ALL BOOKS
  document.querySelector('#all-books').addEventListener('click', () => {
    getBooks().then(showBooks);
  });
  // gets all authors
  document.querySelector('#authors').addEventListener('click', () => {
    getAuthors().then(showAuthors);
  });
  // filters fave authors
  document.querySelector('#fave-authors').addEventListener('click', () => {
    getFaveAuthors().then(showAuthors);
  });
  // STRETCH: SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      searchBooks(searchValue).then((search) => {
        if (search.length) {
          showBooks(search);
        } else {
          emptyBooks();
        }
      });
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
    }
  });
};

export default navigationEvents;
