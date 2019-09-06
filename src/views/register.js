import { functionRegisterClick } from '../controller/register-controller.js';

export default () => {
  const containerToRegister = document.createElement('div');
  containerToRegister.className = 'container column  container-register';

  const templateRegister = `
  
    <div class="cover-page-imagen two-column  content-center">
    <p class="presentacion"> <b>“El inicio fácil para emprendedores como tú" Aquí encontrarás lo que necesitas para sacar adelante tu idea de negocio. 
    ¿Tienes una idea de emprendimiento y quieres sacarlo adelante?</b></p>
    </div>
    <div class=" two-column  flex-c content-center">
      <div class="title-form column">
        <img  class="logo" src="img/easyStart1.png" alt="logo easy start"><a href="#"></a>
        <h2 >Crear tu cuenta de Easy Start</h2>
        <form class="flex-c center-items" action="">
          <input class="input-login" id="txt-name-register" type="email" placeholder="Usuario" required>
          <input class="input-login" id="txt-email-register" type="text" placeholder="Email">
          <input class="input-login" id="txt-password-register" type="password" placeholder="Password">
          <label class="error-registra" id="txt-message-error-register"></label>
          <button class="btn-login" id="btn-toRegister" >Registrar</button>
          <a class="" href="#/"><span class="register">Iniciar Sesión</span></a>
        </form>
      </div>
    </div>
`;
  containerToRegister.innerHTML = templateRegister;
  containerToRegister.setAttribute('class', 'two-column flex-r m-auto');
  const btnToRegister = containerToRegister.querySelector('#btn-toRegister');
  btnToRegister.addEventListener('click', functionRegisterClick);
  return containerToRegister;
};
