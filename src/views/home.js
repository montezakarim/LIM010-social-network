    
export default () => {
    const home = document.createElement('header');
    const templateHome = `
      <header class="cabecera">
        <img class="logo" src="img/Sweet Diet Logo1.png" alt="Sweet Diet" ><a href="#"></a>
        <p class="slogan">"Rico y Saludable"</p>
      </header>   
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
      </div>
      <footer>
        Sweet Diet by KarMel  Copyright © All rights reserved.
      </footer>`;
    home.innerHTML = templateHome;
    return home;
  };