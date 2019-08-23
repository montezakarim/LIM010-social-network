// eslint-disable-next-line import/named
import { userCurrent, addPost } from '../firebase/controllerdata.js';
// import { listPosts } from '../views/post.js';

// agregar un post en la bd
export const functionPostAdd = (event) => {
  event.preventDefault();
  const newPost = document.getElementById('new-post').value;
  // const user = userCurrent();
  const privacyUser = document.getElementById('privacy').value;

  addPost(newPost, userCurrent().uid, userCurrent().displayName, privacyUser)
    .then(() => {
      document.getElementById('new-post').value = '';
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