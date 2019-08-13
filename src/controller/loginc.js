import  { singInLogin, signInFacebook, signInGoogle, logOut } from '../firebase/controllerdata.js'
export const singInLoginClick = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  const messageErrorLabel = document.getElementById("loginMessageError");
  return singInLogin(email, password)
    .then(function (result) {
      messageErrorLabel.classList.remove("show-message-error");
      messageErrorLabel.innerHTML = '';
      location.hash = '#/home';
      alert('Ingresaste')
      location.hash = '#/home';
    })
    .catch(function (error) {
      messageErrorLabel.classList.add("show-message-error");
      switch (error.code) {
        case 'auth/user-not-found':
          messageErrorLabel.innerHTML = 'Usuario no registrado';
          break;
        case 'auth/wrong-password':
          messageErrorLabel.innerHTML = 'Contraseña incorrecta';x 
          break;
        case 'auth/invalid-email':
          messageErrorLabel.innerHTML = 'No se ingresó ningún correo electrónico';
          break
        default:
          messageErrorLabel.innerHTML = 'Se ha producido un error';
          console.log(`code: "${error.code}" & message: ${error.message}`);
      }
    });
};

export const signInFacebookClick = (event) => {
  event.preventDefault();
  signInFacebook()
  .then(function() {
      // Esto te da un token de acceso de Facebook. Puedes usarlo para acceder a la API de Facebook.
      const token = result.credential.accessToken;
      //  La información de usuario registrada.
      const user = result.user
      alert('Facebook')
      location.hash = '#/home';
    }).catch(function(error) {
      // Manejar errores aquí.
      const errorCode = error.code;
      const errorMessage = error.message;
      // El correo electrónico de la cuenta del usuario utilizado.
      const email = error.email;
      // El tipo firebase.auth.AuthCredential que se utilizó.
      const credential = error.credential;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('Es el mismo usuario');
      }
    });
};

export const signInGoogleClick = (event) => {
  event.preventDefault();
  return signInGoogle()
  .then(function (result) {
      let token = result.credential.accessToken;
      let user = result.user;
      alert('Google')
      location.hash = '#/home';
    }).catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        alert('Es el mismo usuario');
      }
    });
};
 export const userCurrent =() =>{
   return firebase.auth().currentUser;
};
export const logOutOnClick = (evt) => {
  evt.preventDefault();
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      return logOut()
        .then(() => {
          alert('Hasta Pronto');
          location.hash = '#/ingreso';
        });
    } else {
      location.hash = '#/registro';
    }
  });
};