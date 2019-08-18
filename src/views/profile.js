import { functionProfile } from '../controller/profilec.js';

export default () => {
  const profileUser = document.createElement('div');
  const templateProfile = `
  <div id="vista-profile" class="perfil">
    <div class="perfil-contenedor">
      <label class="nombre-perfil">Perfil de Usuario</label>
      <img src='./img/profile.png' id="foto"/>
      <label><strong>Nombres:</strong></label>
      <input id="nombre" type="text"/>
      <label><strong>Apellidos:</strong></label>
      <input id="apellido" type="text"/>
      <label><strong>Lugar de Nacimiento:</strong></label>
      <input id="nacimiento" type="text"/>
      <label><strong>Celular/Teléfono:</strong></label>
      <input id="telefono" type="text"/>
      <label><strong>Email:</strong></label>
      <input id="correo" type="text"/>
      <button id="editar-perfil">Editar</button>
      <button id="button-save">Guardar</button>
    <div>        
  </div>`;
  profileUser.innerHTML = templateProfile;
  const saveUser = profile.querySelector('#button-save');
  saveUser.addEventListener('click', () => {
    const userNombre = divElem.querySelector('#nombre').value;
        const userApellido = divElem.querySelector('#apellido').value;
        const userNacimiento = divElem.querySelector('#nacimiento').value;
        const userTelefono = divElem.querySelector('#telefono').value;
        const userCorreo = divElem.querySelector('#correo').value;
        functionProfile(userNombre, userApellido, userNacimiento, userTelefono, userCorreo);
  });
  return profileUser
};
