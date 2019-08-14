export const recoverUserName = (userName) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const displayName = user.displayName;
      // const userPhoto = user.photoURL;
      const userEmail = user.email;
      // console.log(displayName);
      // console.log(userEmail);
      if (displayName === null) {
        userName.textContent = userEmail;
      } else {
        userName.textContent = displayName;
      }
    }
  });
};
