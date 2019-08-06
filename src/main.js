// // Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();
const name = document.getElementById ('nombre');
const checkIn = document.getElementById('registrar');
checkIn.addEventListener('click',() => {
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('contrasena').value;
    const rPassword=document.getElementById('confirmar-contrasenna').value; 
 console.log(email);
 Console.log(contrasena)
    Console.log('dar click')
});
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
//   });email-password.html