import { recoverUserName } from '../controller/homec.js';
import { logOutOnClick } from '../controller/loginc.js';

export default () => {
  const home = document.createElement('div');
  const templateHome = `
    <div class="wrap home">
      <header class="" >
        <div>
          <img class="icon-header" src="img/Yummy.PNG" alt="Yummy" ><a href="#"></a>
        </div> 
        <nav class="wrap">
          <a href="#/"><img src="img/home.png" class ="icon-header" alt=""></a>
          <a href="#/"><img src="img/login.png" class ="icon-header" alt=""></a>
          <a href="#/profile" id="user-name"><img src="img/logo-user.png" class ="icon-header" alt=""></a>
          <a href="#/"><img src="img/search.png" class ="icon-header" alt=""></a>
          <button id="logout"><img src="img/logout2.png" class ="icon-header" alt=""></button>
        </nav>
      </header>   
    </div>
    <footer>
      <p>Sweet Diet by KarMel  © All rights reserved.</p>
    </footer>`;
  home.innerHTML = templateHome;
  const btnLogOut = home.querySelector('#logout');
  const userName = home.querySelector('#user-name');
  recoverUserName(userName);
  userName.addEventListener('click', () => {
    // location.hash = '#profile';
  });
  btnLogOut.addEventListener('click', logOutOnClick);
  return home;
};
