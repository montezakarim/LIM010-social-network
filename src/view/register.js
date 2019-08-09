export default () => {
    const viewRegister= `
    <h2>Crear Cuenta</h2>
    <form action="#">
    <input id="txt-name-regist-add" type="text" placeholder="Nombre" required>
    <input id="txt-email-add" type="email" placeholder="e-mail" required>
    <input id="txt-password-add" type="password" placeholder="Contraseña" required>
    <input id="txt-confir-password-add" type="password" placeholder="Confirmar Contraseña" required>
    <input id="btn-add" type="submit" value= "Registrarse">
    <button id="btn-logout" class="hide">Cerrar Sesión</button>
    </form>`

    const divElem = document.createElement('div');
    divElem.innerHTML = viewRegister;

    return divElem;
}