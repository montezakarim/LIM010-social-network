// Autentificación
export const functionRegister = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};
export const singInLogin = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};
export const signInFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const logOut = () => firebase.auth().signOut();

<<<<<<< HEAD
export const userCurrent = () => firebase.auth().currentUser;
=======
// Post
>>>>>>> 527a7ed36fcbb676fffdf52a7786bf4a9717e37d
