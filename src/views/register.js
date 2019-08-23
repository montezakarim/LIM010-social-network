import { functionRegisterClick } from '../controller/register-controller.js';

export default () => {
  const registerUser = document.createElement('div');
  registerUser.className = 'container column  container-register';

  const templateRegister = `
    <div class="cover-page-imagen two-column center-items">
    </div>
    <div class="center-items two-column  flex-c" id="registrar">
      <div class="title-form column">
        <img  class="logo" src="img/easyStart.png" alt="logo easy start"><a href="#"></a>
        <h2 >Crear tu cuenta de Easy Start</h2>
        <form class="flex-c center-items" action="">
          <input class="input-login" id="txt-name-regist-add" type="email" placeholder="Usuario" required>
          <input class="input-login" id="txt-email-add" type="text" placeholder="Email">
          <input class="input-login" id="txt-password-add" type="password" placeholder="Password">
          <button class="btn-login" id="btn-add" >Registrar</button>
          <label class="error-registra" id="registerMessageError"></label>
          <a class="" href="#/"><span id="register" class="bold">Iniciar Sesión</span></a>
        </form>
      </div>
    </div>`;
  registerUser.innerHTML = templateRegister;
  registerUser.setAttribute('class', 'two-column flex-r');
  const btnAdd = registerUser.querySelector('#btn-add');
  btnAdd.addEventListener('click', functionRegisterClick);
  return registerUser;
};