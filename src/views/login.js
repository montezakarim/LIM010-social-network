import { singInLoginClick, signInFacebookClick, signInGoogleClick } from '../controller/loginc.js';

export default () => {
  const loginUser = document.createElement('div');
  const templateLogin = `
      <div class="container-logo b" >
        <img  src="img/easyStart.png" alt="logo easy start"><a href="#"></a>
      </div>   
      <div class="container-form wrap b">
        <div class="register-login column">
          <h2 >Bienvenid@!!</h2>
          <form id="autenticacion" class="form-register" >
            <div class = "form-group">
              <input id="email" type="email" placeholder="Usuario" required>
            </div>
            <div class = "form-group">
              <input id="password" type="password" placeholder="U+1F511 Contraseña" required>
            </div>
            <div class = "form-group">
              <button id="btn-login">Iniciar Sesión</button>
              <label id="loginMessageError"></label>
            </div>
          </form>
        </div>
        <div class="column">
          <p class="ingresar">O ingresa con: </p>
          <div class="wrap">
            <button id= "btn-facebook" class="facebook fg"></button>
            <button id="btn-google" class="google fg"></button>
          </div>
          <label class="ingresar">¿No tienes una cuenta?&nbsp;<a href="#/register"><span id="register" class="bold">Regístrate</span></a></label>
          </div>
      </div>`;
  loginUser.innerHTML = templateLogin;
  loginUser.setAttribute('class', 'container-register column a');
  const formAutenticacion = loginUser.querySelector('#autenticacion');
  const loginFacebook = loginUser.querySelector('#btn-facebook');
  const loginGoogle = loginUser.querySelector('#btn-google');

  formAutenticacion.addEventListener('submit', singInLoginClick);
  loginFacebook.addEventListener('click', signInFacebookClick);
  loginGoogle.addEventListener('click', signInGoogleClick);
  return loginUser;
};
