
import { logOutOnClick } from '../controller/login-controller.js';
import { functionPostAdd } from '../controller/post-controller.js';

export default () => {
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
    </div>
    `;
  home.innerHTML = templateHome;
  const btnLogOut = home.querySelector('#logout');

  btnLogOut.addEventListener('click', logOutOnClick);

  // Publicar post
  const btnToPost = home.querySelector('#btn-post');
  btnToPost.addEventListener('click', functionPostAdd);
  return home;
};
