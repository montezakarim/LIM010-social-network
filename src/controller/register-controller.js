import { functionRegister } from '../firebase/controllerdata.js';

export const functionRegisterClick = (event) => {
  event.preventDefault();
  const email = document.getElementById('txt-email-add').value;
  const password = document.getElementById('txt-password-add').value;
  const regMessageErrorLabel = document.getElementById('registerMessageError');
  const name = document.getElementById('txt-name-regist-add').value;
  functionRegister(email, password)
    .then(() => {
      regMessageErrorLabel.classList.remove('show-message-error');
      regMessageErrorLabel.innerHTML = '';
      const user = firebase.auth().currentUser;
      console.log(user);
      window.location.hash = '#/';
      firebase.firestore().collection('users').doc(user.uid).set({
        Usuario: name,
        Correo: email,
      });
      console.log(name);
      console.log(email);
    })
    .catch((error) => {
      regMessageErrorLabel.classList.add('show-message-error');
      switch (error.code) {
        case 'auth/email-already-in-use':
          regMessageErrorLabel.innerHTML = '¡La dirección de correo electrónico ya existe!';
          break;
        case 'auth/weak-password':
          regMessageErrorLabel.innerHTML = 'La contraseña debe tener 6 ó más caracteres';
          break;
        case 'auth/invalid-email':
          regMessageErrorLabel.innerHTML = 'No se escribió correo electrónico válido, example@example.com';
          break;
        default:
          regMessageErrorLabel.innerHTML = 'Se ha producido un error';
      }
    });
};