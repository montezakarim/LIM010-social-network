import
{
  singInLogin, signInFacebook, signInGoogle, logOut,
}
  from '../firebase/controllerdata.js';


export const singInLoginClick = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  const messageErrorLabel = document.getElementById('loginMessageError');
  return singInLogin(email, password)
    .then(() => {
      messageErrorLabel.classList.remove('show-message-error');
      messageErrorLabel.innerHTML = '';
      window.location.hash = '#/home';
      firebase.auth().onAuthStateChanged(user => { // para detectar que el usuario ya se ha logueado
        if (user) {
          location.hash = '#/home';
        }
      });
    })
    .catch((error) => {
      messageErrorLabel.classList.add('show-message-error');
      switch (error.code) {
        case 'auth/user-not-found':
          messageErrorLabel.innerHTML = 'Usuario no registrado';
          break;
        case 'auth/wrong-password':
          messageErrorLabel.innerHTML = 'Contraseña incorrecta';
          break;
        case 'auth/invalid-email':
          messageErrorLabel.innerHTML = 'No se ingresó ningún correo electrónico';
          break;
        default:
          messageErrorLabel.innerHTML = 'Se ha producido un error';
      }
    });
};

export const signInFacebookClick = (event) => {
  event.preventDefault();
  signInFacebook()
    .then(() => {
      window.location.hash = '#/home';
    }).catch((error) => {
      // Manejar errores aquí.
      const errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        // console.log('es el mismo usuario');
      }
    });
};

export const signInGoogleClick = (event) => {
  event.preventDefault();
  signInGoogle()
    .then(() => {
      window.location.hash = '#/home';
    }).catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        // console.log('es el mismo usuario');
      }
    });
};

export const showPassword = () => {
  const typePass = document.querySelector('#password');
  if (typePass.type === 'password') {
    typePass.type = 'text';
  } else {
    typePass.type = 'password';
  }
};

export const logOutOnClick = (evt) => {
  evt.preventDefault();
  logOut()
    .then(() => {
      window.location.hash = '#/';
    });
};
