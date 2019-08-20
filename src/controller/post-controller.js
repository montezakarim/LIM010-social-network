export const functionPost = () => {
  // const email = document.getElementById('correo').value;
  const post = document.getElementById('new-post').value;
  // console.log(email);
  console.log(post);
  firebase.firestore().collection('post').add({
    Post: post,
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      // document.getElementById('correo').value = '';
      // document.getElementById('new-post').value = '';
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};
