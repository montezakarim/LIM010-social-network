import { deletePostClick, editPostClick, likePostClick } from "../controller/post-controller.js";

export const listPosts = (data) => {
  const containerOnePost = document.createElement('div');
 
  const templateOnePost = `
      <div class="form-post">
        <h4 class="name-post">${data.userName}</h4>
        <p>${data.privacity}</p>
        <p>${data.timePost.toDate()}</p>
        
        <div class="form-post">
            <p id="show-post-${data.id}">${data.notes}</p>
        </div>
        <div>
          <button id="confirm-delete"><i class="fas fa-trash-alt"></i></button>
          <button id="confirm-edit"><i class="fas fa-edit"></i></button>
          <button id="like-post"><i class="fab fa-gratipay"></i></button>
          <span id="like-count">${data.like}</span>
        </div>

        <div id="confirm-delete-view" class="modal">
          <div class="modal-content">
            <p>¿Deseas eliminar la publicación?</p>
            <button id="delete-post-${data.id}" class="btn-edit">Si</button>
            <button id="no-delete-post" class="btn-edit">No</button>
          </div>
        </div>
        <div id="text-edit-view" class="modal">
          <div class="modal-content">
            <button id="close-post"> &times </button>
            <button class="btn-edit" id="edit-post-${data.id}">Guardar</button>
            <textarea id="text-edit" cols="60" rows="5">${data.notes}</textarea>
          </div>
        </div>
        
        
      </div>`;
  containerOnePost.innerHTML = templateOnePost;
  const viewConfirmDelete = containerOnePost.querySelector('#confirm-delete-view')
  const confirmDeleted = containerOnePost.querySelector('#confirm-delete');
  confirmDeleted.addEventListener('click', () => {
   viewConfirmDelete.style.display = 'block';
  });
  
  const deletePost = containerOnePost.querySelector(`#delete-post-${data.id}`);
  deletePost.addEventListener('click', () => deletePostClick(data));
  
  const noDelete = containerOnePost.querySelector('#no-delete-post');
  noDelete.addEventListener('click', () => {
    viewConfirmDelete.style.display = 'none';
  });

  let viewTextEdit = containerOnePost.querySelector('#text-edit-view');
  const viewConfirmEdit = containerOnePost.querySelector('#confirm-edit');
  viewConfirmEdit.addEventListener('click', () => {
    viewTextEdit.style.display = 'block';
  });
  const editPost = containerOnePost.querySelector(`#edit-post-${data.id}`);
  editPost.addEventListener('click', () => editPostClick(data)); 
  const closePost = containerOnePost.querySelector('#close-post');
  closePost.addEventListener('click', () => {
    viewTextEdit.style.display = 'none';
  });
  const postLike = {
    '#like-post': likePostClick,
  };
  Object.keys(postLike).forEach((element) => {
    const btnLikePost = containerOnePost.querySelector(element)
    btnLikePost.addEventListener('click', () => postLike[element](data));
  });
  return containerOnePost;
};
