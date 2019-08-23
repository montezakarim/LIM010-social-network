import { logOutOnClick } from '../controller/login-controller.js';
import { functionPostAdd } from '../controller/post-controller.js';
import { listPosts } from './post.js';
// import { update } from '../controller/post-controller.js';
// const array = ['hola1','hola2', 'hola3'];

export default (array1) => {
  const home = document.createElement('div');
  const templateHome = `
    <div class="wrap home">
      <header class="" >
          <nav class="wrap">
          <a href="#/home"><img src="img/easyStart.png" alt="Easy Start" class="icon-header"></a>
          <button id="logout"><img src="img/logout2.png" class ="icon-header" alt=""></button>
        </nav>
      </header>   
    </div>
    <div id="datos-user">
      <img class="foto-user" id="foto" src="img/logo-user.png" />
      <div class="datos">
        <label  id="name" for="name"></label>
        <label id="correo" for="name"></label>
      </div>
    </div>
      <div class="wall-feed margin-left" >
        <div class="form-post">
          <form id ="form-input">
            <input type="text" id="new-post" class="input-comment" placeholder="¿Qué quieres compartir?">
          </form>
          <div class="btn-comment">
            <form class="btn-comment-right">
              <img src="" class="">
              <select id="privacy" class="privacy">
                <option value="Privado" class="font-weight-privacy">Privado</option>
                <option value="Público" class="font-weight-privacy">Público</option>
              </select>
              <button id="btn-post" class="btn-post btn-compartir">Compartir</button>
              <input type="submit" id="edit-post" class="btn-post btn-compartir hide" value="Editar">
              <button id="mis-post" class="btn-post btn-compartir"> All Post</button>
              <label id="postMessageError"></label>
            </form>
          </div>
        </div>
        <section >
        
        </section>
      </div>
      <div class="form-post" id="tabla">
      </div>
    </div> `;
  home.innerHTML = templateHome;
  const btnLogOut = home.querySelector('#logout');

  const totalView = home.querySelector('#tabla');
  // const array=[1,2,3,4];
  for (let i=0; i<array1.length; i++){
  totalView.appendChild(listPosts(array1[i]));
  }

  //   data.forEach((elemento) => {
  // });


  // Publicar post
  const btnToPost = home.querySelector('#btn-post');
  btnToPost.addEventListener('click', functionPostAdd);

  btnLogOut.addEventListener('click', logOutOnClick);

  return home;
};

