// export const functionPost = () => {
//   //const email = document.getElementById('correo').value;
//   const post = document.getElementById('new-post').value;
//   //console.log(email);
//   // console.log(post);
//   firebase.firestore().collection("post").add({
//     Post: post,
//   })
//   .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
//     //document.getElementById('correo').value = '';
//     //document.getElementById('new-post').value = '';
//   })
//   .catch((error) => {
//     console.log("Error adding document: ", error);
//   });
// };
const addPost = (textNewPost, userId, userName, privacyUser) =>
  firebase.firestore().collection('posts').add({
    content: textNewPost,
    UID: userId,
    name: userName,
    reaction: 0,
    reactionsad: 0,
    reactionlike: 0,
    reactionlove: 0,
    privacity: privacyUser,
    date: firebase.firestore.FieldValue.serverTimestamp()
  });
  
export const addPostOnSubmit = (evt) => {
  evt.preventDefault();
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      const inputText = document.getElementById('post');
      let inputSpace = '                                                                                ';
      const inputTrim = inputSpace.trim();
      const privacity = document.getElementById('privacidad');

      if (inputText.value === '' || inputText.value === inputTrim || inputText.value === ' ') {
        alert('Ingresa un contenido');
      } else {
        firebase.firestore().collection('users').doc(user.uid).get()
          .then(doc => {
            if (user.displayName === null) { 
              addPost(inputText.value, user.uid, doc.data().name, privacity.value);
            } else { // en caso de que haya ingresado con facebook o google
              addPost(inputText.value, user.uid, user.displayName, privacity.value);
            }
          });
      }
    } else {
      alert('Inicia sesión en Easy Start para poder compartir tu historia');
    }
  });
};
export const deletePostOnClick = (objPost) => deletePost(objPost.id);

export const editarPostOnSubmit = (objPost) => {
  if (objPost.UID === firebase.auth().currentUser.uid) { 
    let textNewUpdate = document.querySelector('#texto-edit');
    let modal = document.querySelector('#myModal');
    modal.style.display = 'none';

    editPost(objPost.id, textNewUpdate.value);
  } 
};