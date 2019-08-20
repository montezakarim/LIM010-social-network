import { addPost, userCurrent, deletePostFirebase } from '../firebase/controllerdata.js';

export const functionPostAdd = (event) => {
  event.preventDefault();
  const newPost = document.getElementById('new-post').value;
  const user = userCurrent();
  const privacyUser = document.getElementById('privacy').value;
  if (newPost === '' || newPost === ' ') {
    alert('Ingresa un contenido');
  } else {
    addPost(newPost, user, privacyUser)
      .then(() => {
        alert('Post Ingresado');
        console.log(newPost);
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  }
};

export const deletePost = (id) => {
  deletePostFirebase(id)
    .then(() => {
      deletePostFirebase(id);
      // console.log('Document written with ID: ', docRef.id);
    }).catch((error) => {
      console.error('Error adding document: ', error);
    });
};
