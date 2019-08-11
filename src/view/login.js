export const  loginView= () => {
    const viewLogin= `
    <div>
        <h2>Bienvenid@</h2>
        <form action="#">
          <input id="txt-email" type="email" placeholder="Usuario" required>
          <input id="txt-password" type="password" placeholder="Contraseña" required>
          <input id="btn-login" type="submit" value= "Registrar"><a href="#/Registrar"></a>
        </form>
    </div>
    <div>
        <p>Ingresar con: </p>
        <button id= "btn-facebook" class="facebook"></button>
        <button id="btn-google" class="google"></button>
        <input id= "add" type="submit" value="Crear Cuenta"> 
    </div>`

    const divElem = document.createElement('div');
    divElem.innerHTML = viewLogin;

    return divElem;
}