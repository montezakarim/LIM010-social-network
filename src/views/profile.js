import { getData, updateProfile } from '../controller/profile-controller.js';

export default () => {
  const profileUser = document.createElement('div');
  const templateProfile = `
  <div id="vista-profile" class="perfil">
    <div class="perfil-contenedor">
      <h2>Profile</h2> 
      <img src="http://www.cavsi.com/preguntasrespuestas/images/que-es-usuario.jpg">
      <input id='fileid' type='file' hidden/>
      <input id='fileButton' type='button' value='Upload MB' />
      <form>
        <input type="text" value="" class="inputForm" id="name">
        <input type="text" value="" disabled class="inputForm" id="email">
        <input type="submit" class="button-login" id="button-save" value="Guardar">
      </form>
    </div>
  </div>
    `;
  profileUser.innerHTML = templateProfile;
  const name = profileUser.querySelector('#name');
  const email = profileUser.querySelector('#email');
  getData(name, email);
  const saveUser = profileUser.querySelector('#button-save');

  saveUser.addEventListener('click', (event) => {
    event.preventDefault();
    const newName = profileUser.querySelector('#name').value;
    const newEmail = profileUser.querySelector('#email').value;
    updateProfile(newName, newEmail).then(() => {
      // Update successful.
      window.location.hash = '#/home';
    });
  });
  return profileUser;
};
