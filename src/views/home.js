<<<<<<< HEAD
import { infoUser } from '../controller/registerc.js';
import { logOutOnClick } from '../controller/loginc.js';
import { addPostOnSubmit } from '../controller/postc.js';
=======
// import { infoUser } from '../controller/registerc.js';
import { logOutOnClick } from '../controller/login-controller.js';
import { functionPost } from '../controller/post-controller.js';
>>>>>>> 527a7ed36fcbb676fffdf52a7786bf4a9717e37d

export default () => {
  const home = document.createElement('div');
  const templateHome = `
    <div class="wrap home">
      <header class="" >
        <div>
          <img class="icon-header" src="img/easyStart.png" alt="Easy Start" ><a href="#"></a>
        </div> 
        <nav class="wrap">
          <a href="#/post"><img src="img/home.png" class ="icon-header" alt=""></a>
          <a href="#/"><img src="img/login.png" class ="icon-header" alt=""></a>
          <button id="user-name"><img src="img/logo-user.png" class ="icon-header" alt=""></button>
          <a href="#/"><img src="img/search.png" class ="icon-header" alt=""></a>
          <button id="logout"><img src="img/logout2.png" class ="icon-header" alt=""></button>
        </nav>
      </header>   
<<<<<<< HEAD
      <main class="column">
        <div id="vista-home" class="formulario-post">
          <div id="datos-user">
            <img class="foto-user" id="foto" src="img/logo-user.png" />
            <div class="datos">
              <label class="profile-name" id="name" for="name"></label>
              <label id="correo" class="profile-name" for="name"></label>
            </div>
          </div>
          <div id="ingreso-post">
            <form class="formulario-post">
              <div class="imagen-post">
                <textarea  class="textarea" name="post" id="post" cols="30" rows="3" placeholder="¡Publica tus novedades!"></textarea>
              </div>
              <div class="imagen-post">
                <select class="botones-post" name="" id="privacidad">
                <option value="amigas">Emprendedores</option>
                <option value="publico">Público</option>
                </select>
                <button class="botones-post" id="publicar">Publicar</button>
              </div>
            </form>
=======
    </div>
    <div id="datos-user">
      <img class="foto-user" id="foto" src="logo-user.png" />
      <div class="datos">
        <label class="profile-name" id="name" for="name"></label>
        <label id="correo" class="profile-name" for="name"></label>
      </div>
    </div>
      <div class="wall-feed margin-left" >
        <div class="form-post">
          <form id ="form-input">
            <input type="text" id="new-post" class="input-comment" placeholder="¿Qué quieres compartir?">
          </form>
          <div class="btn-comment">
            <div class="btn-comment-right">
              <img src="" class="">
              <select id="privacy" class="privacy">
                <option selected disabled value="">Privacidad</option>   
                <option value="Privado" class="font-weight-privacy">Privado</option>
                <option value="Público" class="font-weight-privacy">Público</option>
              </select>
              <button id="btn-topost" class="btn-post btn-compartir">Compartir</button>
            </div>
>>>>>>> 527a7ed36fcbb676fffdf52a7786bf4a9717e37d
          </div>
          <section id="lista-publicaciones"></section>
        </div>
<<<<<<< HEAD
      </main>
      <footer>
        <p>Easy Start by KarMel  © All rights reserved.</p>
      </footer>
    </div>`;
=======
        <div id="post-container"></div>
      </div>
    </div>
    <footer>
      <p>Easy Start by KarMel  © All rights reserved.</p>
    </footer>`;
>>>>>>> 527a7ed36fcbb676fffdf52a7786bf4a9717e37d
  home.innerHTML = templateHome;
  const btnLogOut = home.querySelector('#logout');
  const btnUser = home.querySelector('#user-name');

  btnUser.addEventListener('click', () => {
    window.location.hash = '#profile';
  });

  btnLogOut.addEventListener('click', logOutOnClick);
<<<<<<< HEAD
  const userName = home.querySelector('#name');
  const userCorreo = home.querySelector('#correo');
  const userImage = home.querySelector('#foto');

  infoUser(userName, userCorreo, userImage);
  const btnPost = home.querySelector('#publicar');
  // const listPost= home.querySelector('#lista-publicaciones');
 
  btnPost.addEventListener('click', addPostOnSubmit);
=======

  // const userName = home.querySelector('#name');
  // const userCorreo = home.querySelector('#correo');
  // const userImage = home.querySelector('#foto');

  // Publicar post
  const btnToPost = home.querySelector('#btn-topost');
  btnToPost.addEventListener('click', () => {
    functionPost();
  });

  // infoUser(userName, userCorreo, userImage);
>>>>>>> 527a7ed36fcbb676fffdf52a7786bf4a9717e37d
  return home;
};
