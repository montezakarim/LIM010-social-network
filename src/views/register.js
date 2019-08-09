import { functionRegister } from '../controller/registerc.js';

export default () => {
  const registerUser = document.createElement('div');
  registerUser.className = 'container';

  const templateRegister = `
    <header class="cabecera">
      <img class="logo" src="img/Sweet Diet Logo1.png" alt="Sweet Diet" ><a href="#"></a>
      <p class="slogan">"Rico y Saludable"</p>
    </header>  
    <div id="registrar" class="crear-cuenta">
      <h2>Crear Cuenta</h2>
      <form>
          <input id="txt-name-regist-add" type="text" placeholder="Nombre" required>
          <input id="txt-email-add" type="email" placeholder="e-mail" required>
          <input id="txt-password-add" type="password" placeholder="Contraseña" required>
          <input id="btn-add" type="submit" value= "Registrarse">
          <a href="#/register"><span id="register" class="bold">Iniciar Sesión</span></a>
      </form>
    </div>`;
  registerUser.innerHTML = templateRegister;
  const btnAdd = registerUser.querySelector('#btn-add');
  btnAdd.addEventListener('click', functionRegister);
  return registerUser;
};