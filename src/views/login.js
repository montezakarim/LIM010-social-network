import { singInLogin, signInFacebook, signInGoogle } from '../controller/loginc.js';

export default () => {
  const loginUser = document.createElement('div');
  loginUser.className = 'container';
  const templateLogin = `
  <div class="contenedor-form">
    <div class="login">
      <h2>Bienvenid@</h2>
      <form id="autenticacion" >
        <input id="email" type="email" placeholder="Usuario" required>
        <input id="password" type="password" placeholder="Contraseña" required>
        <input id="btn-login" type="submit" value= "Iniciar Sesión">
      </form>
    </div>
    <div class="checkin">
      <p>Ingresar con: </p>
      <button id= "btn-facebook" class="facebook"></button>
      <button id="btn-google" class="google"></button>
      <label>¿No tienes una cuenta?&nbsp;<a href="#/register"><span id="register" class="bold">Regístrate</span></a></label>
    </div>
  </div> `;
  loginUser.innerHTML = templateLogin;
  
  const formAutenticacion = loginUser.querySelector('#autenticacion');
  const loginFacebook = loginUser.querySelector('#btn-facebook');
  const loginGoogle = loginUser.querySelector('#btn-google');

  formAutenticacion.addEventListener("submit", singInLogin);
  loginFacebook.addEventListener('click', signInFacebook);
  loginGoogle.addEventListener('click', signInGoogle,false);
  return loginUser;
};