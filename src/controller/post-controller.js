import { userCurrent, addPost } from '../firebase/controllerdata.js';

// agregar un post en la bd
export const functionSharePost = (event) => {
  event.preventDefault();
  const txtPost = document.getElementById('txt-new-post').value;
  const postState = document.getElementById('post-state').value;

  addPost(txtPost, userCurrent().uid, userCurrent().displayName, postState)
    .then(() => {
      document.getElementById('txt-new-post').value = '';
      alert('Post agregado');
    }).catch((error) => {
      console.log('error de adding documt', error);
    });
};

// guardar en un array la data para agregar la propiedad id en el objeto--para llamar en la ruta
export const getPosts = (dataPost) => {
  firebase.firestore().collection('posts')
    .onSnapshot((querySnapshot) => {
      // const data = [];
      querySnapshot.forEach((doc) => {
        dataPost({ id: doc.id, ...doc.data() });
      });
    }); 
};