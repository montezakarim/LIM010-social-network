export const functionProfile = (nombre, apellido, nacimiento, telefono, correo) => {
  return firebase.firestore().collection('users').add({
    first: nombre,
    last: apellido,
    date: nacimiento,
    telephone: telefono,
    email: correo,
  })
    .then((docRef) => {
      console.log('Documento escrito con ID: ', docRef.id);
    })
    .catch((error) => {
      console.log('Error al agregar documento:', error);
    });
};
