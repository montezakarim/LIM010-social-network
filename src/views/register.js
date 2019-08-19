import { functionRegisterClick } from '../controller/register-controller.js';

export default () => {
  const registerUser = document.createElement('div');
  registerUser.className = 'container column a container-register';


  const templateRegister = `
    <div class="container-form wrap b" id="registrar">
      <img class="logo" src="img/easyStart.png" alt="logo easy start" ><a href="#"></a>
      <article class = "register-login column">
        <h2 class="title-register">Regístrate con tu email</h2>
        <form class="form-register column" action="">
          <div class = "form-group">
            <input class="input-register outlinenone" id="txt-name-regist-add" type="text" placeholder="Nombre">
          </div>
          <div class = "form-group">
            <input class="input-register outlinenone" id="txt-email-add" type="text" placeholder="Email">
          </div>
          <div class = "form-group">
            <input class="input-register outlinenone" id="txt-password-add" type="password" placeholder="Password">
          </div>
          <div class = "form-group">
            <button class="outlinenone" id="btn-add" >Registrar</button>
          </div>
          <label  id="registerMessageError"></label>
          <a class="ingresar" href="#/"><span id="register" class="bold">Iniciar Sesión</span></a>
        </form>
      </article> 
    </div>`;
  registerUser.innerHTML = templateRegister;
  const btnAdd = registerUser.querySelector('#btn-add');
  btnAdd.addEventListener('click', functionRegisterClick);
  return registerUser;
};
