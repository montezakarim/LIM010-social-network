export const infoUser = (userName, userCorreo, userImage) => {
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const displayName = user.displayName;
      const userEmail = user.email;
      const userPhoto = user.photoURL;
      if (displayName == null && userPhoto == null) {
        // console.log(user);
        // console.log(displayName, userPhoto, userEmail);
        userName.textContent = displayName;
        userCorreo.textContent = userEmail;
        userImage.src = './img/logo-user.png';
      } else {
          userName.textContent = displayName;
          userCorreo.textContent = userEmail;
          userImage.src = userPhoto;
      }
    }
  });
};

export const viewProfile = () => {
  window.location.hash = '#/profile';
};