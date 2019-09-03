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

// export const logOut = () => firebase.auth().signOut();

export const userCurrent = () => firebase.auth().currentUser;

// guardamos los datos del usuario en la bd
export const createUser = (id, name, email) => {
  firebase.firestore().collection('users').doc(id).set({
    idUsuario: id,
    Nombre: name,
    Email: email,
  });
};

// Post
export const addPost = (newPost, id, userNombre, postState, email, likes) => firebase.firestore().collection('posts').add({
  notes: newPost,
  idUser: id,
  userName: userNombre,
  privacity: postState,
  like: likes,
  timePost: new Date(),
  emailUser: email,
});

export const getPost = (callback) => {
  firebase.firestore().collection('posts').orderBy('timePost', 'desc')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      callback(data);
      
    });
};
// Eliminar Publicación
export const deletePost = (id) => {
  return firebase.firestore().collection('posts').doc(id).delete();
};
// Editar Publicación
export const editPost = (idPost, newTextPost) => {
  return firebase.firestore().collection('posts').doc(idPost).update({
    notes: newTextPost,
  });
};
// Likes y Contador
export const likesPost = id => firebase.firestore().collection('posts').doc(id).get();
export const likesPostCount = (id, likes) => {
  return firebase.firestore().collection('posts').doc(id).update({
  like: likes += 1,
  });
};

// agregar comentario
export const addCommentPost = (idPost, id, text) => {
  firebase.firestore().collection('comment').add({
    idPost,
    idUsuario: id,
    comment: text,
  });
};
