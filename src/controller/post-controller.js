import { addPost, userCurrent } from '../firebase/controllerdata.js';

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
      .catch(() => {
        console.error('Error adding document: ', error);
      }); 
    } 
};

