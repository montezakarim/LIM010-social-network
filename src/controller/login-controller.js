import
{
  singInLogin, signInFacebook, signInGoogle, logOut,  userCurrent,
}
  from '../module/controllerdata.js';


export const singInLoginClick = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  const menssageErrorLogin = document.getElementById('txt-message-error-login');
  return singInLogin(email, password)
    .then(() => {
      menssageErrorLogin.classList.remove('show-message-error');
      menssageErrorLogin.innerHTML = '';
      window.location.hash = '#/home';

    })
    .catch((error) => {
      menssageErrorLogin.classList.add('show-message-error');
      switch (error.code) {
        case 'auth/user-not-found':
          menssageErrorLogin.innerHTML = 'Usuario no registrado';
          break;
        case 'auth/wrong-password':
          menssageErrorLogin.innerHTML = 'Contraseña incorrecta';
          break;
        case 'auth/invalid-email':
          menssageErrorLogin.innerHTML = 'No se ingresó ningún correo electrónico';
          break;
        default:
          menssageErrorLogin.innerHTML = 'Se ha producido un error';
      }
    });
};

export const signInFacebookClick = (event) => {
  event.preventDefault();
  signInFacebook()
    .then(() => {
      const user = userCurrent();
      console.log(user);
      firebase.firestore().collection('users').doc(user.uid).set({
        Usuario: user.displayName,
        Correo: user.email,
      });
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
  return signInGoogle()
    .then(() => {
      const user = userCurrent();
      console.log(user);
      firebase.firestore().collection('users').doc(user.uid).set({
        Usuario: user.displayName,
        Correo: user.email,
      });
      window.location.hash = '#/home';
    }).catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/account-exists-with-different-credential') {
        // console.log('es el mismo usuario');
      }
    });
};



export const logOutOnClick = (event) => {
  event.preventDefault();
  logOut()
    .then(() => {
      window.location.hash = '#/';
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
