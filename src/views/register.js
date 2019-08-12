import { functionRegister } from '../controller/registerc.js';

export default () => {
  const registerUser = document.createElement('div');
  const templateRegister = `
    <div class="wrap">
      <div>
      <img class="logo" src="img/Yummi.png" alt="Yummi" ><a href="#"></a>
      </div>    
      <div id="registrar" class="wrap">
        <h2>Crear Cuenta</h2>
        <form class="wrap">
          <input id="txt-name-regist-add" type="text" placeholder="Nombre" required>
          <input id="txt-email-add" type="email" placeholder="e-mail" required>
          <input id="txt-password-add" type="password" placeholder="Contraseña" required>
          <input id="btn-add" type="submit" value= "Registrarse">
          <label id="registerMessageError"></label>
          <a href="#/register"><span id="register" class="bold">Iniciar Sesión</span></a>
        </form>
      </div>
    </div>
    <footer>
      Sweet Diet by KarMel  © All rights reserved.
    </footer>`;
  registerUser.innerHTML = templateRegister;
  const btnAdd = registerUser.querySelector('#btn-add');
  btnAdd.addEventListener('click', functionRegister);
  return registerUser;
};