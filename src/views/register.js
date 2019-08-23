import { functionRegisterClick } from '../controller/register-controller.js';

export default () => {
  const registerUser = document.createElement('div');
  registerUser.className = 'container column a container-register';


  const templateRegister = `
  <div class="banner bnsu-image two-col center-items">
    <img  class="hide" src="img/pantalla3.png" alt="imagen">
  </div>
    <div class="center-items two-col  flex-c" id="registrar">
    <div class="register-login column">
    <img  class="logo" src="img/easyStart.png" alt="logo easy start"><a href="#"></a>
      
        <h2 >Crear Cuenta!</h2>
        <form class="flex-c center-items" action="">

          <input class="input-form" id="txt-name-regist-add" type="email" placeholder="Usuario" required>
          <input class="input-form" id="txt-email-add" type="text" placeholder="Email">
          <input class="input-form" id="txt-password-add" type="password" placeholder="Password">
          <button class="btn-login" id="btn-add" >Registrar</button>
          <label class="error-registra" id="registerMessageError"></label>
          <a class="" href="#/"><span id="register" class="bold">Iniciar Sesión</span></a>
        </form>
  
      </div>
    </div>`;
  registerUser.innerHTML = templateRegister;
  registerUser.setAttribute('class', ' two-col flex-r');
  const btnAdd = registerUser.querySelector('#btn-add');
  btnAdd.addEventListener('click', functionRegisterClick);
  return registerUser;
};