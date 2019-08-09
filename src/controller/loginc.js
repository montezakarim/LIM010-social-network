export const singInLogin = (event) => {
    event.preventDefault();
    const user = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().signInWithEmailAndPassword(user, password)
      .then(function (result) {
        alert('hola');
        location.hash = '#/home';
      })
      .catch(function (error) {
        alert('Error');
      });
  };

 export const signInFacebook = (event) => {
    event.preventDefault();
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // Esto te da un token de acceso de Facebook. Puedes usarlo para acceder a la API de Facebook.
        const token = result.credential.accessToken;
        //  La información de usuario registrada.
        const user = result.user
      }).catch(function(error) {
        // Manejar errores aquí.
        const errorCode = error.code;
        const errorMessage = error.message;
        // El correo electrónico de la cuenta del usuario utilizado.
        const email = error.email;
        // El tipo firebase.auth.AuthCredential que se utilizó.
        const credential = error.credential;
      })
  };

 export const signInGoogle = (event) => {
    event.preventDefault();
     if (!firebase.auth().currentUser) {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      firebase.auth().signInWithPopup(provider).then(function (result) {
        let token = result.credential.accessToken;
        let user = result.user;
        alert('Google')
      }).catch(function (error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        let email = error.email;
        let credential = error.credential;
        if (errorCode === 'auth/account-exists-with-different-credential') {
          alert('Es el mismo usuario');
        }
      });
    } else {
      firebase.auth().signOut();
    } 
   
  };