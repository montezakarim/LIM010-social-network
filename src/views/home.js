import { logOutOnClick } from '../controller/login-controller.js';
import { functionSharePost } from '../controller/post-controller.js';
import { listPosts } from './post.js';
import { userCurrent } from '../module/controllerdata.js';
//import { listCommentPost } from './post-comment.js';

export default (allPost) => {
  const containerHome = document.createElement('div');
  const templateHome = `
    <div class="wrap">
      <header class="bg-color-blue" >
        <select class="mobile-navbar1">
          <option class="mobile-navbar1" value=0>${userCurrent().displayName}</option> 
        </select>
        <button id="btn-menu" class="mobile-navbar btn-menu"><i class="fas fa-bars"></i></button>
        <div id='nav2'> </div> 
        <p class="title-header"> Easy Start </p>
        <button id="logout" class="logout"><img src="img/logout2.png" class ="icon-header" alt=""></button>
      
      </header>   
    </div>
    <div class="two-column flex-r">
      <div class="column-post wall-feed margin-left" >
      <div class="form-post border-perfil">
        <img class="foto-user" id="foto" src="${userCurrent().photoURL}" />
        <div class="datos">
          <label  id="name" for="name">${userCurrent().displayName}</label>
          <label id="correo" for="name">${userCurrent().email}</label>
        </div>
        </div>
      </div>
      <div class="column-post wall-feed margin-left">
      <div class="wall-feed margin-left " >
        <div class="form-post">
          <form>
            <input type="text" id="txt-new-post" class="input-post" placeholder="¿Qué quieres compartir?">
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
      <div class="wall-feed margin-left " id="container-list-post">
      </div>
    </div>`;
  containerHome.innerHTML = templateHome;
  const btnLogOut = containerHome.querySelector('#logout');
  // menu movil
  if (userCurrent().displayName) {
    const btnNav = containerHome.querySelector('#btn-menu');
    btnNav.addEventListener('click', ()=> {
    const nav2 =containerHome.querySelector('#nav2');
    nav2.appendChild(nav())
  })
  }

  // Imprimir todo las publicaciones dinamicamente
  console.log(allPost);
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

const  nav = () => {
  let nav1 =
 ` <ul>
    <li><a id='logout'>Cerrar Sesión</a></li>
    </ul>`
 const nav =document.createElement('nav')
 nav.innerHTML = nav1;
 const btnLogout=nav.querySelector('#logout');
 btnLogout.addEventListener('click', logOutOnClick);

 return nav;
 }
