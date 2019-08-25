import { logOutOnClick } from '../controller/login-controller.js';
import { functionSharePost } from '../controller/post-controller.js';
import { listPosts } from './post.js';
// import { update } from '../controller/post-controller.js';
// const array = ['hola1','hola2', 'hola3'];

export default (allPost) => {
  const containerHome = document.createElement('div');
  const templateHome = `
    <div class="wrap home">
      <header class="" >
          <nav class="wrap">
          <p> Easy Start </p>
          <button id="logout"><img src="img/logout2.png" class ="icon-header" alt=""></button>
        </nav>
      </header>   
    </div>
    <div>
      <div>
        <img class="foto-user" id="foto" src="img/logo-user.png" />
        <div class="datos">
          <label  id="name" for="name"></label>
          <label id="correo" for="name"></label>
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
              <button id="btn-edit-post" class="btn-post btn-compartir hide">Editar</button>
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

