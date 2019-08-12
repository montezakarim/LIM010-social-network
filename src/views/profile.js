import { functionProfile } from '../controller/profilec.js';
import { userCurrent } from '../controller/loginc.js';
export default () => {
  const use = userCurrent();
  const profileUser = document.createElement('div');
  const templateProfile = `
    <h2>Perfil</h2> 
    <img src="img/logo-user.png" alt="User">
    <input id='fileid' type='file' hidden/>
    <input id='fileButton' type='button' value='Upload MB' />
    <form>
        <input type="text" value="${use.displayName}" id="name">
        <input type="text" value="${use.email}" disabled  >
        <input type="submit"  id="button-save" value="Guardar">
    </form>`;

  profileUser.innerHTML = templateProfile;

  const saveUser = profile.querySelector('#button-save');
  
  saveUser.addEventListener('click', () => {
    event.preventDefault();
    const user = userCurrent();
    const name = profile.querySelector('#name').value;
    functionProfile(user, name).then(function () {
      // Update successful.
      location.hash = '#/home';
    });
  });
  return profileUser;
};
