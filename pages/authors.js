import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyAuthors = () => {
  const domString = '<h1>No Authors</h1>';
  renderToDOM('#store', domString);
};

const showAuthors = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';

  renderToDOM('#add-button', btnString);

  let domString = '';
  if (array.length < 1) {
    domString = 'No authors to show';
  } else {
    array.forEach((item) => {
      domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${item.first_name} ${item.last_name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${item.email}</h6>
        <p class="card-text bold">${item.favorite ? '<span class="badge badge-info sale-badge"><i aria-hidden="true"></i> Favorite </span>' : '<span></span>'}</p>
        <hr>
        <hr>
        <i class="btn btn-success fas" id="view-author-btn--${item.firebaseKey}">Details</i>
        <i class="fas btn btn-info" id="update-author--${item.firebaseKey}">Update</i>
        <i class="btn btn-danger fas" id="delete-author-btn--${item.firebaseKey}">Delete</i>
      </div>
    </div>
    `;
    });
  }
  renderToDOM('#store', domString);
};

export { showAuthors, emptyAuthors };
