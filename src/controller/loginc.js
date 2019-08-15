import { singInLogin, signInFacebook, signInGoogle, logOut } from '../firebase/controllerdata.js';

const messageErrorLabel = document.getElementById('loginMessageError');
export const singInLoginClick = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  return singInLogin(email, password)
    .then(() => {
      messageErrorLabel.classList.remove('show-message-error');
      messageErrorLabel.innerHTML = '';
      window.location.hash = '#/home';
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
      messageErrorLabel.classList.remove('show-message-error');
      window.location.hash('#/home');
    }).catch((error) => {
      messageErrorLabel.classList.add('show-message-error');
      const errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        messageErrorLabel.innerHTML = 'Es el mismo usuario';
      }
    });
};

export const signInGoogleClick = (event) => {
  event.preventDefault();
  return signInGoogle()
    .then(() => {
      window.location.hash('#/home');
    }).catch((error) => {
      messageErrorLabel.classList.add('show-message-error');
      const errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        messageErrorLabel.innerHTML = 'Es el mismo usuario';
      }
    });
};

export const userCurrent = () => firebase.auth().currentUser;

export const logOutOnClick = (evt) => {
  evt.preventDefault();
  logOut()
    .then(() => {
      window.location.hash('#/');
    });
};
