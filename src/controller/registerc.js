import { functionRegister } from '../firebase/controllerdata.js';

export const functionRegisterClick = (event) => {
  event.preventDefault();
  const email = document.querySelector('#txt-email-add').value;
  const password = document.querySelector('#txt-password-add').value;
  const regMessageErrorLabel = document.getElementById('registerMessageError');

  functionRegister(email, password)
    .then(() => {
      regMessageErrorLabel.classList.remove('show-message-error');
      regMessageErrorLabel.innerHTML = '';
      window.location.hash = '#/';
      return firebase.firestore().collection('users').doc(result.user.uid).set({
        Username: username,
        Foto: 'https://image.flaticon.com/icons/png/512/16/16363.png',
        Email: email
      });
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

export const infoUser = (userName, userCorreo, userImage) => {
  const auth = firebase.auth();
  return auth.onAuthStateChanged( user => {
    if (user) {
      const displayName = user.displayName;
      const userEmail = user.email;
      const userPhoto = user.photoURL;
      if(displayName == null && userPhoto == null){
        console.log(user);
        console.log(displayName,userPhoto,userEmail);
        
        userName.textContent = 'Usuario Nuevo';
        userCorreo.textContent = userEmail;
        userImage.src = './img/profile.png';
      }else{
      userName.textContent = displayName;
      userCorreo.textContent = userEmail;
      userImage.src = userPhoto;
      }  
    } 
  });
};