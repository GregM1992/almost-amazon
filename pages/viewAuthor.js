import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewAuthor = (obj) => {
  clearDom();
  let domString = '';
  domString += `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <div class="mt-5">
       <i id="edit-author-btn--${obj.firebaseKey}" class="fas btn btn-info">Edit Author</i>
       <i id="delete-author--${obj.firebaseKey}" class="btn btn-danger fas">Delete Author</i>
     </div>
   </div>
   <div class="text-white ms-5 details">
     <h5>${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
     Author Email: <a href="mailto:${obj.email}">${obj.email}</a>
      </div>
    </div>`;

  obj.books.forEach((item) => {
    domString += `
        <div class="card">
          <div class="card-body">
          <img class="card-img-top" src=${item.image} alt=${item.title} style="width: 150px;">
            <h5 class="card-title">${item.title}</h5>
              <p class="card-text bold">${item.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${item.price}` : `$${item.price}`}</p>
              <hr>
              <i class="btn btn-success fas " id="view-book-btn--${item.firebaseKey}">View Book</i>
              <i id="edit-book-btn--${item.firebaseKey}" class="fas btn btn-info">Edit Book</i>
              <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger fas">Delete Book</i>
          </div>
        </div>`;
  });

  renderToDOM('#view', domString);
};

export default viewAuthor;
