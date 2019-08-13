import { singInLoginClick, signInFacebookClick, signInGoogleClick } from '../controller/loginc.js';
export default () => {
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
        </form>
      </div>
      <div class="column">
        <p>Ingresar con: </p>
        <div class="wrap">
          <button id= "btn-facebook" class="facebook fg"></button>
          <button id="btn-google" class="google fg"></button>
        </div>
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