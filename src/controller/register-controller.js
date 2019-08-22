import { functionRegister, userCurrent } from '../module/controllerdata.js';
//Registramos un nuevo usuario 
export const obtenerNombreEmail = (email) => {
  // Obtención de datos de un documento
  firebase.firestore().collection('users').where("Email", "==", email).get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => { // forEach -> se repite por cada documento que este en users
            // console.log(doc.id, " => ", doc.data());
            console.log(doc.data().Nombre);// consoleamos el nombre que hay en el documento
            console.log(doc.data().Email);// consoleamos el nombre que hay en el documento
        });
    })
    .catch((error) => {
        console.log("Error al obtener documentos: ", error);
    });
  };
const crearUsuario = (id, name, email, foto) => {
  firebase.firestore().collection('users').doc(id).set({ // agrega datos en la colección
    ID: id,
    Nombre: name,
    Email: email,
    Foto: foto
  });
};
export const functionRegisterClick= (email, password, name, foto) => {
  event.preventDefault();
  const regMessageErrorLabel = document.getElementById('registerMessageError');
  functionRegister(email, password)
    .then(() => {
      regMessageErrorLabel.classList.remove('show-message-error');
      regMessageErrorLabel.innerHTML = '';
      const user = userCurrent();
      console.log(user);
      obtenerNombreEmail(email); // obtenemos nombre y email del usuario creado
      crearUsuario(user.uid, name, email, foto);// creamos el usuario en firebase
      window.location.hash = '#/';
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
