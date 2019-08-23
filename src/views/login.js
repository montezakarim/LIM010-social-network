import
{
  singInLoginClick, signInFacebookClick, signInGoogleClick, showPassword,
} from '../controller/login-controller.js';

export default () => {
  const loginUser = document.createElement('div');
  const templateLogin = `
    <div class="cover-page-imagen center-items two-column">
    </div>  
    <div class="two-column center-items  flex-c">
      <div class="title-form column">
        <img  class="logo" src="img/easyStart.png" alt="logo easy start"><a href="#"></a>
        <h2>Bienvenid@ Emprendedor!</h2>
        <form id="autenticacion" class="flex-c center-items" >
          <input class="input-login " id="email" type="email" placeholder="Usuario" required><i class="fas fa-envelope"></i>
          <input class="input-login" id="password" type="password" placeholder="Contraseña" required><i id="show-eye" class="far fa-eye"></i>
          <button class="btn-login " id="btn-login">Iniciar Sesión</button>
          <label id="loginMessageError"></label>
        </form>
      </div>
      <div class="column">
        <p class="text-login">O ingresa con: </p>
        <div class="wrap">
          <button id= "btn-facebook" class="facebook fg"></button>
          <button id="btn-google" class="google fg"></button>
        </div>
          <label class="text-login">¿No tienes una cuenta?&nbsp;<a href="#/register"><span id="register" class="bold">Regístrate</span></a></label>
      </div>
    </div>`;
  loginUser.innerHTML = templateLogin;
  loginUser.setAttribute('class', 'two-column flex-r');
  const formAutenticacion = loginUser.querySelector('#autenticacion');
  const loginFacebook = loginUser.querySelector('#btn-facebook');
  const loginGoogle = loginUser.querySelector('#btn-google');
  const showEye = loginUser.querySelector('#show-eye');

  formAutenticacion.addEventListener('submit', singInLoginClick);
  loginFacebook.addEventListener('click', signInFacebookClick);
  loginGoogle.addEventListener('click', signInGoogleClick);
  showEye.addEventListener('click', showPassword);
  return loginUser;
};