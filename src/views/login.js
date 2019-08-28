import
{
  singInLoginClick, signInFacebookClick, signInGoogleClick, showPassword,
} from '../controller/login-controller.js';

export default () => {
<<<<<<< HEAD
const loginUser = document.createElement('div');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     const templateLogin = `
  <div class="container-register column">
    <div class="container-logo" >
    <img  src="img/Yummy.PNG" alt="Yummi" ><a href="#"></a>
    </div>   
    <div class="container-form wrap">
      <div class="register-login column">
        <h2>Iniciar Sesion con Yummy</h2>
        <form id="autenticacion" class="form-register" >
          <div class = "form-group">
            <input id="email" type="email" placeholder="Usuario" required>
          </div>
          <div class = "form-group">
            <input id="password" type="password" placeholder="Contraseña" required>
          </div>
          <div class = "form-group">
            <input id="btn-login" class = "form-group" for type="submit" value= "Iniciar Sesión">
            <label id="loginMessageError"></label>
          </div>
=======
  const containerLogin = document.createElement('div');
  const templateLogin = `
    <div class="cover-page-imagen center-items two-column">
    </div>  
    <div class="two-column center-items  flex-c">
      <div class="title-form column">
        <img  class="logo" src="img/easyStart.png" alt="logo easy start"><a href="#"></a>
        <h2>Bienvenid@ Emprendedor!</h2>
        <form id="form-authentication" class="flex-c center-items" >
          <input class="input-login " id="email" type="email" placeholder="Usuario" required><i class="fas fa-envelope"></i>
          <input class="input-login" id="password" type="password" placeholder="Contraseña" required><i id="show-eye" class="far fa-eye"></i>
          <button class="btn-login " id="btn-login">Iniciar Sesión</button>
          <label id="txt-message-error-login"></label>
>>>>>>> 0b7919ab8e344026340ac1defd5df43f9293279f
        </form>
      </div>
      <div class="column">
        <p class="text-login">O ingresa con: </p>
        <div class="wrap">
          <button id= "btn-facebook" class="facebook fg"></button>
          <button id="btn-google" class="google fg"></button>
        </div>
<<<<<<< HEAD
        <label>¿No tienes una cuenta?&nbsp;<a href="#/register"><span id="register" class="bold">Regístrate</span></a></label>
        </div>
    </div>
  </div>`;
  loginUser.innerHTML = templateLogin;
  const formAutenticacion = loginUser.querySelector('#autenticacion');
  const loginFacebook = loginUser.querySelector('#btn-facebook');
  const loginGoogle = loginUser.querySelector('#btn-google');
  formAutenticacion.addEventListener("submit", singInLoginClick);
  loginFacebook.addEventListener('click', signInFacebookClick);
  loginGoogle.addEventListener('click', signInGoogleClick);
  return loginUser;
};
=======
          <label class="text-login">¿No tienes una cuenta?&nbsp;<a href="#/register"><span id="register" class="bold">Regístrate</span></a></label>
      </div>
    </div>`;
  containerLogin.innerHTML = templateLogin;
  containerLogin.setAttribute('class', 'two-column flex-r');
  const authenticationEmailClick = containerLogin.querySelector('#form-authentication');
  const authenticationFacebook = containerLogin.querySelector('#btn-facebook');
  const authenticationGoogle = containerLogin.querySelector('#btn-google');
  const showEye = containerLogin.querySelector('#show-eye');

  authenticationEmailClick.addEventListener('submit', singInLoginClick);
  authenticationFacebook.addEventListener('click', signInFacebookClick);
  authenticationGoogle.addEventListener('click', signInGoogleClick);
  showEye.addEventListener('click', showPassword);
  return containerLogin;
};
>>>>>>> 0b7919ab8e344026340ac1defd5df43f9293279f
