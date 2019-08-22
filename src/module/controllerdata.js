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

export const userCurrent = () => firebase.auth().currentUser;

// Post
export const addPost = (newPost, user, privacyUser) => firebase.firestore().collection('posts').add({
  notes: newPost,
  user: user.uid,
  userName: user.displayName,
  privacity: privacyUser,
  timePost: (new Date()).toLocaleDateString(),
});

export const deletePostFirebase = (id) => {
  return firebase.firestore().collection('post').doc(id).delete();
};