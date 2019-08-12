import { singInLogin, signInFacebook, signInGoogle } from '../controller/loginc.js';
export default () => {
const loginUser = document.createElement('div');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     const templateLogin = `
  <div class="wrap">
    <div>
      <img class="logo" src="img/Yummi.png" alt="Yummi" ><a href="#"></a>
    </div>   
    <div class="contenedor-form wrap">
      <div class="login wrap">
        <h2>Iniciar Sesion con Yummi</h2>
        <form id="autenticacion" class="wrap" >
          <input id="email" type="email" placeholder="Usuario" required>
          <input id="password" type="password" placeholder="Contraseña" required>
          <input id="btn-login" type="submit" value= "Iniciar Sesión">
          <label id="loginMessageError"></label>
        </form>
      </div>
      <div class="column">
        <p>Ingresar con: </p>
        <div class="wrap">
          <button id= "btn-facebook" class="facebook"></button>
          <button id="btn-google" class="google"></button>
        </div>
        <label>¿No tienes una cuenta?&nbsp;<a href="#/register"><span id="register" class="bold">Regístrate</span></a></label>
        </div>
    </div>
  </div>
  <footer>
   Sweet Diet by KarMel  © All rights reserved.
  </footer>`;
  loginUser.innerHTML = templateLogin;
  const formAutenticacion = loginUser.querySelector('#autenticacion');
  const loginFacebook = loginUser.querySelector('#btn-facebook');
  const loginGoogle = loginUser.querySelector('#btn-google');

  formAutenticacion.addEventListener("submit", singInLogin);
  loginFacebook.addEventListener('click', signInFacebook);
  loginGoogle.addEventListener('click', signInGoogle);
  return loginUser;
};