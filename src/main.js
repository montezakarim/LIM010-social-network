// Este es el punto de entrada de tu aplicacion

const init = () => {
window.addEventListener('hashchange', ()=> console.log(window.location.hash))
}
window.addEventListener('load',init);

(function(){
    const firebaseConfig = {
        apiKey: "AIzaSyAY3VOT2W4EKd4wxEfo759lF2sjMk6Hy4I",
        authDomain: "sweet-diet-5c3e2.firebaseapp.com",
        databaseURL: "https://sweet-diet-5c3e2.firebaseio.com",
        projectId: "sweet-diet-5c3e2",
        storageBucket: "",
        messagingSenderId: "114566620755",
        appId: "1:114566620755:web:0b0b489f58560e4e"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      // Obtener elementos
      const txtEmail=document.getElementById('txt-email');
      const txtPassword=document.getElementById('txt-password');
      const btnLogin=document.getElementById('btn-login');
      const txtNameAdd=document.getElementById('txt-name-regist-add');
      const txtEmailAdd=document.getElementById('txt-email-add');
      const txtPasswordAdd=document.getElementById('txt-password-add');
      const txtConfirPasswordAdd=document.getElementById('txt-confir-password-add');
      const btnAdd=document.getElementById('btn-add');
      const btnFacebook=document.getElementById('btn-facebook');
      const btnGoogle=document.getElementById('btn-google');
      const btnLogout=document.getElementById('btn-logout')
      //Añadir evento login
      btnLogin.addEventListener('click',() => {
          const email = txtEmail.value;
          const password = txtPassword.value;

          const promise=firebase.auth().signInWithEmailAndPassword(email, password);
          promise.catch(e => console.log(e.message));
      });

      //Añadir evento registrar
      btnAdd.addEventListener('click',() =>{
        // obtener email y password
        const nameAdd = txtNameAdd.value;
        const emailAdd = txtEmailAdd.value;
        const passwordAdd = txtPasswordAdd.value;
        const confirmPasswordAdd = txtConfirPasswordAdd.value;

        const promise=firebase.auth().createUserWithEmailAndPassword(emailAdd, passwordAdd);
        promise.catch(e => console.log(e.message));
      }); 
      
      //Añadir registro con facebook
      btnFacebook.addEventListener("click", () => {
        const provider = new firebase.auth.FacebookAuthProvider();
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
        });
      });
       btnGoogle.addEventListener('click',()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
          const token = result.credential.accessToken;
        // The signed-in user info.
          const user = result.user;
         }).catch(function(error) {
        // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
        // The email of the user's account used.
          const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
          const credential = error.credential;
        });
      });
      btnLogout.addEventListener('click',()=>{
        firebase.auth().signOut();
      });
      const activeUser =()=>{
      firebase.auth().onAuthStateChanged(firebaseUser=>{
        if(firebaseUser){
          console.log(firebaseUser);
          btnLogout.classList.remove('hide');
        } else {
          console.log ('no logueado');
          btnLogout.classList.add('hide');
        }
      });
      };
      activeUser();

}());
