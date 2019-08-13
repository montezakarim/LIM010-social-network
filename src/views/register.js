import { functionRegisterClick } from '../controller/registerc.js';

export default () => {
  const registerUser = document.createElement('div');
  registerUser.className = 'container';


  const templateRegister = `
  <div class="container-register column">
    <section class = "container-logo ">
      <img  src="img/Yummy.PNG" alt="Yummi" ><a href="#"></a>
    </section>
    <section class="container-form" id="registrar">
      <article class = "register-login column">
        <h2 class="title-register">Registrate con tu email</h2>
        <form class="form-register" action="">
          <div class = "form-group">
            <input class="input-register" id="txt-name-regist-add" type="text" placeholder="Nombre">
          </div>
          <div class = "form-group">
            <input class="input-register" id="txt-email-add" type="text" placeholder="Email">
          </div>
          <div class = "form-group">
            <input class="input-register" id="txt-password-add" type="password" placeholder="Password">
          </div>
          <div class = "form-group">
            <input class="btn-add" id="btn-add" type="submit" value="Registrar">
          </div>
          <label id="registerMessageError"></label>
          <a href="#/login"><span id="register" class="bold">Iniciar Sesión</span></a>
        </form>
      </article> 
    </section>
  </div>`;
  registerUser.innerHTML = templateRegister;
  const btnAdd = registerUser.querySelector('#btn-add');
  btnAdd.addEventListener('click', functionRegisterClick);
  return registerUser;
};