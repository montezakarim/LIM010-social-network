import { recoverUserName } from '../controller/homec.js'
export default () => {
  const home = document.createElement('div');
  const templateHome = `
    <div class="wrap">
      <header >
        <div>
          <img class="menu" src="img/Yummi.png" alt="Yummi" ><a href="#"></a>
        </div> 
        <nav>
          <ul class="links">
            <li><a id="user-name">User</a></li>
            <li><a href="#/">login</a></li>
            <li><a href="#/">Cerrar Sesión</a></li>
          </ul>
        </nav>
      </header>   
    <main>
      <h1>...</h1>
      <div id="profile"></div>
    </main>
    <footer>
    Sweet Diet by KarMel  © All rights reserved.
    </footer>`;
  home.innerHTML = templateHome;
  const userName = home.querySelector('#user-name');
  recoverUserName(userName);
  userName.addEventListener('click',() => {
    location.hash = '#profile';
  });
  return home;
};