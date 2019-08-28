import { userCurrent, addPost, deletePost, editPost, likesPost, likesPostCount} from '../module/controllerdata.js';

// agregar un post en la bd
export const functionSharePost = (event) => {
  event.preventDefault();
  const txtPost = document.getElementById('txt-new-post').value;
  const postState = document.getElementById('post-state').value;
  const user = userCurrent();
  let countLike = 0;
  addPost(txtPost, user.uid, user.displayName, postState,countLike)
    .then(() => {
      document.getElementById('txt-new-post').value = '';
      // alert('Post agregado');
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
//Eliminar Post
export const deletePostClick = (id) => {
  deletePost(id.id)
    .then(() => {
      // console.log('Document written with ID: ', docRef.id);
    }).catch((error) => {
      console.error('Error adding document: ', error);
    });
   
};
// Editar Post
export const editPostClick = (id) => { 
    let newtextPost= document.querySelector('#text-edit');
    editPost(id.id, newtextPost.value);
};

// Likes de Post
export const likePostClick = (id) => {
  likesPost(id.id)
    .then((result) => {
      const seeCount = result.data().like;
      console.log(seeCount);
      return  seeCount;
     
    }).catch(() => {});
  
  let likePostCountshow = document.getElementById('like-count');
  likePostCountshow.innerHTML = likesPostCount(id.id, id.like);
};


// // agregar un comentario en la bd
// export const functionShareComment = (event) => {
//   event.preventDefault();
//   const txtComment = document.getElementById('txt-comment').value;
//   const user = userCurrent();
//   addCommentPost (txtComment, user.uid)
//     .then(() => {
//       document.getElementById('txt-comment').value = '';
//       alert('comment agregado');
// });
// };
