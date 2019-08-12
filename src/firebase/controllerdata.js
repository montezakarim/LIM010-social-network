export const functionRegister = (email, password) =>    
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const singInLogin = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const signInFacebook = () => {
  let provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider).then(function(result) {
    result;
  });
};

export const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider).then(function(result) {
  result;
    });
};
