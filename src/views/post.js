import { deletePostClick, editPostClick, likePostClick } from "../controller/post-controller.js";
import { addCommentPost, getCommentPost, userCurrent } from '../module/controllerdata.js';
//import { listCommentPost } from '../views/post-comment.js';
export const listPosts = (data) => {
  const containerOnePost = document.createElement('div');
 
  const templateOnePost = `
      <div class="form-post1 container-list-post">
        <div class="post-article post-head border-box bg-blue ">
          <h4 class="name-post">${data.userName}</h4>
          <p clas="txt-date">${data.timePost.toDate()}</p>
        </div>
        
        <div class="form-post1">
            <p id="show-post-${data.id}">${data.notes}</p>
        </div>
        <div class="form-post1  container-btn-share">
        <div >
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
        </div>
        <div id="comments" class="form-post1  ">
            <div class=""> 
              <input id="txt-comment" type="text" class="input-comment" placeholder="Escribe un comentario">
              <button id="btn-comment" class="btn-post btn-compartir" type="button"> Comentar</button>
            </div>
            <div id="comment-post"></div>
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


  console.log(data);
  const containerComentario = containerOnePost.querySelector('#comment-post');
  const callComments = (data) => {
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    containerComentario.appendChild(listCommentPost(data[i]));
  }
  };
  getCommentPost(data.id, callComments);
  
  
  // //pintar comentario
  // const containerComentario = containerOnePost.querySelector('#comment-post');
  //   const callComments = (data) => {
  //     data.forEach(element => {
  //       containerComentario.appendChild(listCommentPost(element));
  //     });
  //   };
  //   getCommentPost(data.id, callComments);


// Agregar comentario en la sub coleccion
  const btnComment = containerOnePost.querySelector('#btn-comment')
  btnComment.addEventListener('click', ()=>{
    const txtComment = document.getElementById('txt-comment').value;
    console.log(txtComment);
    addCommentPost(data.id,data.userName,txtComment)
  .then((response) => {
    containerOnePost.querySelector('#txt-comment').value = '';
    console.log('se agrego a tu colleccion', response.id);
  }).catch((error) => {
    console.log('no se agrego', error);
  });
  }) ;



  return containerOnePost;
};