// import { infoUser } from '../controller/registerc.js';
import { logOutOnClick } from '../controller/login-controller.js';
import { functionPost } from '../controller/post-controller.js';

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
          </div>
        </div>
        <div id="post-container"></div>
      </div>
    </div>
    <footer>
      <p>Easy Start by KarMel  © All rights reserved.</p>
    </footer>`;
  home.innerHTML = templateHome;
  const btnLogOut = home.querySelector('#logout');
  const btnUser = home.querySelector('#user-name');

  btnUser.addEventListener('click', () => {
    window.location.hash = '#profile';
  });

  btnLogOut.addEventListener('click', logOutOnClick);

  // const userName = home.querySelector('#name');
  // const userCorreo = home.querySelector('#correo');
  // const userImage = home.querySelector('#foto');

  // Publicar post
  const btnToPost = home.querySelector('#btn-topost');
  btnToPost.addEventListener('click', () => {
    functionPost();
  });

  // infoUser(userName, userCorreo, userImage);
  return home;
};
