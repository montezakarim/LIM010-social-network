export const functionProfile = (nombre, apellido, nacimiento, telefono, correo) => {
  return firebase.firestore().collection("users").add({
          first: nombre,
          last: apellido,
          date: nacimiento,
          telephone: telefono,
          email: correo
      })
      .then(function(docRef) {
          console.log("Documento escrito con ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error al agregar documento: ", error);
      });
};
