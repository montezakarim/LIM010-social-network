import { userCurrent, deletePostFirebase } from '../firebase/controllerdata.js';

export const functionPostAdd = (event) => {
  event.preventDefault();
  const newPost = document.getElementById('new-post').value;
  const user = userCurrent();
  const privacyUser = document.getElementById('privacy').value;

  firebase.firestore().collection('posts').add({
  notes: newPost,
  user: user.uid,
  userName: user.displayName,
  privacity: privacyUser,
  timePost: (new Date()).toLocaleDateString(),
  }).then(function(docRef){
    console.log('posts',docRef.id);
    document.getElementById('newPost').value='';
    document.getElementById('user').value='';
    document.getElementById('privacyUser').value='';
  }).catch(function(error){
    console.log('error de adding documt', error);
  })

  // if (newPost === '' || newPost === ' ') {
  //   alert('Ingresa un contenido');
  // } else {
  //   addPost(newPost, user, privacyUser)
  //     .then(() => {
  //       alert('Post Ingresado');
  //       console.log(newPost);
  //     })
  //     .catch((error) => {
  //       console.error('Error adding document: ', error);
  //     });
  // }
  var tabla=document.getElementById('tabla');
  firebase.firestore().collection('posts').get().then((querySnapshot)=>{
    tabla.innerHTML='';
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().userName}`);
      tabla.innerHTML+=`
      <div>${doc.data().notes}</div>`
    });
  });
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