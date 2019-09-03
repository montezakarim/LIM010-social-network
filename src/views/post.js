import { deletePostClick, likePostClick, editPost1 } from '../controller/post-controller.js';
import { addCommentPost, userCurrent } from '../module/controllerdata.js';

export const listPosts = (data) => {
  console.log(data);
  const containerOnePost = document.createElement('div');

  // Convertir la fecha
  const fecha = new Date(data.timePost.toDate());
  const day = fecha.getDate();
  const month = fecha.getMonth() + 1;
  const year = fecha.getFullYear();
  const hour = fecha.getHours();
  const minute = fecha.getMinutes();
  // eslint-disable-next-line no-var
  let mesok = (month < 10) ? '0' + month: month;
  // eslint-disable-next-line no-const-assign
  mesok = new Array(12);
  mesok[0] = 'Enero';
  mesok[1] = 'Febrero';
  mesok[2] = 'Marzo';
  mesok[3] = 'Abril';
  mesok[4] = 'Mayo';
  mesok[5] = 'Junio';
  mesok[6] = 'Julio';
  mesok[7] = 'Agosto';
  mesok[8] = 'Septiembre';
  mesok[9] = 'Octubre';
  mesok[10] = 'Noviembre';
  mesok[11] = 'Diciembre';

  const templateOnePost = `
      <div class='form-post1 container-list-post'>
        <div class='post-article post-head border-box bg-blue '>
          <h4 class='name-post'>${'Publicado Por '}${data.emailUser}</h4>
          <p clas='txt-date'>${day} ${'de'} ${mesok[month]} ${'del'} ${year} ${'|'} ${hour}${':'}${minute}</p>
        </div>
        
        <div class='form-post1'>
        <textarea class='' id='text-${data.id}'  disabled>${data.notes}</textarea>
        </div>
        <div class='form-post1  container-btn-share'>
        <div >
          <button id='confirm-delete'><i class='fas fa-trash-alt'></i></button>
          <button id='edit-${data.id}' class='btn-share'><i class='fas fa-edit'></i>Editar</button>
          <button type='button' id='edit-post' class='btn-save'>Guardar</button>

          <button id='like-post'><i class='fab fa-gratipay'></i></button>
          <span id='like-count'>${data.like}</span>
        </div>



        <div id='confirm-delete-view' class='modal'>
          <div class='modal-content'>
            <p>¿Deseas eliminar la publicación?</p>
            <button id='delete-post-${data.id}' class='btn-edit'>Si</button>
            <button id='no-delete-post' class='btn-edit'>No</button>
          </div>
        </div>
        <!--<div id='text-edit-view' class='modal'>
          <div class='modal-content'>
            <button id='close-post'> &times </button>
            <button class='btn-edit' id='edit-post-${data.id}'>Guardar</button>
            <textarea id='text-edit' cols='60' rows='5'>${data.notes}</textarea>
          </div>
        </div>-->
        </div>
        <div id='comments' class='form-post1  '>
            <div class=''> 
              <input id='txt-comment' type='text' class='input-comment' placeholder='Escribe un comentario'>
              <button id='btn-comment' class='btn-post btn-compartir' type='button'> Comentar</button>
            </div>
            <div id='comment-post'></div>
          </div>        
      </div>`;
  containerOnePost.innerHTML = templateOnePost;
  const viewConfirmDelete = containerOnePost.querySelector('#confirm-delete-view');
  const confirmDeleted = containerOnePost.querySelector('#confirm-delete');
  confirmDeleted.addEventListener('click', () => {
    viewConfirmDelete.style.display = 'block';
  });

  // editar
  const btnEdit = containerOnePost.querySelector(`#edit-${data.id}`);
  const deletePost = containerOnePost.querySelector(`#delete-post-${data.id}`);
  if (userCurrent().uid === data.idUser) {
    btnEdit.addEventListener('click', () => {
      const btnSaveEdit = containerOnePost.querySelector('#edit-post');
      btnSaveEdit.classList.remove('btn-save');
      btnEdit.classList.add('btn-save');
      const textArea = containerOnePost.querySelector(`#text-${data.id}`);
      // textArea.addEventListener('focus', () => {
      textArea.disabled = false;
      textArea.focus();
      btnSaveEdit.addEventListener('click', () => {
        editPost1(data.id, textArea.value);
        btnSaveEdit.classList.remove('btn-save');
        btnEdit.classList.remove('btn-save');
      });
      // });
    });

    deletePost.addEventListener('click', () => deletePostClick(data));
    const noDelete = containerOnePost.querySelector('#no-delete-post');
    noDelete.addEventListener('click', () => {
      viewConfirmDelete.style.display = 'none';
    });
  } else {
    btnEdit.classList.add('btn-save');
    confirmDeleted.classList.add('btn-save');
  }
  const postLike = {
    '#like-post': likePostClick,
  };
  Object.keys(postLike).forEach((element) => {
    const btnLikePost = containerOnePost.querySelector(element)
    btnLikePost.addEventListener('click', () => postLike[element](data));
  });
  // Agregar comentario en la sub coleccion
  const btnComment = containerOnePost.querySelector('#btn-comment')
  btnComment.addEventListener('click', ()=>{
    const txtComment = document.getElementById('txt-comment').value;
    addCommentPost(data.id, data.userName, txtComment)
      .then(() => {
        containerOnePost.querySelector('#txt-comment').value = '';
      });
  });
  return containerOnePost;
};
