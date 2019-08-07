// Este es el punto de entrada de tu aplicacion

import {  
    registerGoogleLogIn,
    registerFacebookLogIn
} from './lib/index.js';

myFunction();

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

      //Añadir evento login
      btnLogin.addEventListener('click',e =>{
          const email = txtEmail.value;
          const password = txtPassword.value;

          const promise=firebase.auth().signInWithEmailAndPassword(email, password);
          promise.catch(e => console.log(e.message));
      });

      //Añadir evento registrar
      btnAdd.addEventListener('click',e =>{
        // obtener email y password
        const nameAdd = txtNameAdd.value;
        const emailAdd = txtEmailAdd.value;
        const passwordAdd = txtPasswordAdd.value;
        const confirmPasswordAdd = txtConfirPasswordAdd.value;

        const promise=firebase.auth().createUserWithEmailAndPassword(emailAdd, passwordAdd);
        promise.catch(e => console.log(e.message));
    });

}());
btnFacebook.addEventListener('click', facebookOnClick);

export const facebookOnClick = () => {
    registerFacebookLogIn()
      .then((result) => {
        changeHash('/wall');
      })
      .catch((error) => { 
        alert(error);
      });
  };

  export const googleOnClick = () => {
    registerGoogleLogIn()
      .then((result) => {
        changeHash('/wall');
      })
      .catch((error) => { 
        alert(error);
      });
  };