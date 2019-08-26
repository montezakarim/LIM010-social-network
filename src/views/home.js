import { logOutOnClick } from '../controller/login-controller.js';
import { functionSharePost } from '../controller/post-controller.js';
import { listPosts } from './post.js';
import { userCurrent } from '../module/controllerdata.js';

export default (allPost) => {
  const containerHome = document.createElement('div');
  const templateHome = `
    <div class="wrap">
      <header class="" >
        <select>
          <option value=0>${userCurrent().displayName}</option>
        </select>
        <p class="title-header"> Easy Start </p>
        <button id="logout" class="logout"><img src="img/logout2.png" class ="icon-header" alt=""></button>
        
      </header>   
    </div>
    <div>
      <div class="flex-c" >
        <img class="foto-user" id="foto" src="${userCurrent().photoURL}" />
        <div class="datos">
          <label  id="name" for="name">${userCurrent().displayName}</label>
          <label id="correo" for="name">${userCurrent().email}</label>
        </div>
      </div>
      <div class="wall-feed margin-left" >
        <div class="form-post">
          <form>
            <input type="text" id="txt-new-post" class="input-comment" placeholder="¿Qué quieres compartir?">
          </form>
          <div class="btn-comment">
            <form class="btn-comment-right">
              <img src="" class="">
              <select id="post-state" class="privacy">
                <option value="Privado" class="font-weight-privacy">Privado</option>
                <option value="Público" class="font-weight-privacy">Público</option>
              </select>
              <button id="btn-share-post" class="btn-post btn-compartir">Compartir</button>
            </form>
          </div>
        </div>
      </div>
      <div class="form-post" id="container-list-post">
    </div>`;
  containerHome.innerHTML = templateHome;
  const btnLogOut = containerHome.querySelector('#logout');

  // Imprimir todo las publicaciones dinamicamente
  const containerListPost = containerHome.querySelector('#container-list-post');
  for (let i = 0; i < allPost.length; i++) {
    containerListPost.appendChild(listPosts(allPost[i]));
  }

  // Publicar post
  const btnSharePost = containerHome.querySelector('#btn-share-post');
  btnSharePost.addEventListener('click', functionSharePost);
  btnLogOut.addEventListener('click', logOutOnClick);

  return containerHome;
};
