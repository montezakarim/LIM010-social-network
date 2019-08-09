import { functionRegister } from '../controller/registerc.js';

export default () => {
  const registerUser = document.createElement('div');
  registerUser.className = 'container';

  const templateRegister = `
    <div id="registrar" class="crear-cuenta hide">
    <section>
    <h2>Crear Cuenta</h2>
    <form action="#">
        <input id="txt-name-regist-add" type="text" placeholder="Nombre" required>
        <input id="txt-email-add" type="email" placeholder="e-mail" required>
        <input id="txt-password-add" type="password" placeholder="Contraseña" required>
        <input id="btn-add" type="submit" value= "Registrarse">
        <button id="btn-logout" class="hide">Cerrar Sesión</button>
    </form>
    </section>
    </div>`;
  registerUser.innerHTML = templateRegister;

  const btnAdd = registerUser.querySelector('#btn-add');

  btnAdd.addEventListener('click', functionRegister);
  return registerUser;
};