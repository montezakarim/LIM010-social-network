import { functionRegisterClick } from '../controller/register-controller.js';

export default () => {
  const containerToRegister = document.createElement('div');
  containerToRegister.className = 'container column  container-register';

  const templateRegister = `
<<<<<<< HEAD
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
          <a href="#/"><span id="register" class="bold">Iniciar Sesión</span></a>
=======
    <div class="cover-page-imagen two-column center-items">
    </div>
    <div class="center-items two-column  flex-c">
      <div class="title-form column">
        <img  class="logo" src="img/easyStart.png" alt="logo easy start"><a href="#"></a>
        <h2 >Crear tu cuenta de Easy Start</h2>
        <form class="flex-c center-items" action="">
          <input class="input-login" id="txt-name-register" type="email" placeholder="Usuario" required>
          <input class="input-login" id="txt-email-register" type="text" placeholder="Email">
          <input class="input-login" id="txt-password-register" type="password" placeholder="Password">
          <button class="btn-login" id="btn-toRegister" >Registrar</button>
          <label class="error-registra" id="txt-message-error-register"></label>
          <a class="" href="#/"><span id="register" class="bold">Iniciar Sesión</span></a>
>>>>>>> 0b7919ab8e344026340ac1defd5df43f9293279f
        </form>
      </div>
    </div>`;
  containerToRegister.innerHTML = templateRegister;
  containerToRegister.setAttribute('class', 'two-column flex-r');
  const btnToRegister = containerToRegister.querySelector('#btn-toRegister');
  btnToRegister.addEventListener('click', functionRegisterClick);
  return containerToRegister;
};