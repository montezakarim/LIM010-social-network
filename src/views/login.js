import { singInLoginClick, signInFacebookClick, signInGoogleClick, showPassword } from '../controller/loginc.js';

export default () => {
  const loginUser = document.createElement('div');
  const templateLogin = `
    <div class="view column">
      <div class="container-logo b" >
        <img  src="img/easyStart.png" alt="logo easy start"><a href="#"></a>
      </div>   
      <div class="container-form wrap b">
        <div class="register-login column">
          <h2 >Bienvenido Emprendedor!</h2>
          <form id="autenticacion" class="form-register" >
            <div class = "form-group">
              <input class="outlinenone" id="email" type="email" placeholder="Usuario" required/> <i class="fas fa-envelope"></i>
            </div>
            <div class = "form-group">
              <input class="outlinenone" id="password" type="password" placeholder="Contraseña" required/><i id="show-eye" class="far fa-eye"></i>
            </div>
            <div class = "form-group">
              <button class="outlinenone" id="btn-login">Iniciar Sesión</button>
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
      </div>
    </div>`;
  loginUser.innerHTML = templateLogin;
  loginUser.setAttribute('class', 'container-register column ');
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
