import { functionProfile } from '../controller/profilec.js';
import { userCurrent } from '../controller/loginc.js';

export default () => {
  const use = userCurrent();
  const profileUser = document.createElement('div');
  const templateProfile = `
  <div class="container">
    <h2>Perfil</h2> 
    <div class="">
      <div class="ft-perfil">
        <img src= "${use.userPhoto}" class="ft" alt="foto de perfil"/>
      </div>
    </div>
    <div >
      <input id='fileid' type='file' hidden/>
      <input id='fileButton' type='button' value='Upload MB' />
      <form>
          <input type="text" value="${use.displayName}" id="name">
          <input type="text" value="${use.email}" disabled  >
          <input type="submit"  id="button-save" value="Guardar">
      </form>
    </div>
  </div>`;

  profileUser.innerHTML = templateProfile;
  const saveUser = profile.querySelector('#button-save');
  saveUser.addEventListener('click', () => {
    const user = userCurrent();
    const name = profile.querySelector('#name').value;
<<<<<<< HEAD
    functionProfile(user, name)
=======
    functionProfile(user, name);
>>>>>>> f2ae135d53c81a1b2c0048452369fc53be937733
    .then(() => {
      // Update successful.
      window.location.hash = '#/home';
    });
  });
};
