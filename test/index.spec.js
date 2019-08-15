// // // // importamos la funcion que vamos a testear
// // // import { myFunction } from '../src/lib/index';

// // // describe('myFunction', () => {
// // //   it('debería ser una función', () => {
// // //     expect(typeof myFunction).toBe('function');
// // //   });
// // // });
// // // configurando firebase mock


// const firebasemock = require('firebase-mock');

// const mockauth = new firebasemock.MockAuthentication();
// const mockfirestore = new firebasemock.MockFirestore();
// mockfirestore.autoFlush();
// mockauth.autoFlush();

// global.firebase = firebasemock.MockFirebaseSdk(
//   // use null if your code does not use RTDB
//   path => (path ? mockdatabase.child(path) : null),
//   () => mockauth,
//   () => mockfirestore
// );

// // iniciando tests
// import  { singInLogin, signInFacebook, signInGoogle, logOut }
// from '../src/firebase/controllerdata.js';

// describe('Iniciar Sesión', () => {
//   it('Debería iniciar sesion', () => {
//     return singInLogin('kmontezam@gmail.com', '123456')
//       .then((result) => {
//         expect(user.email).toBe('kmontezam@gmail.com');
//       });
//   });
// });
// describe('sesion iniciada', () => {
//   it('Deberia poder iniciar sesion con Facebook', () => {
//     return signInFacebook()
//       .then(() => {
//         expect('').toBe('');
//       });
//   });
// });

// describe('sesion iniciada', () => {
//   it('Deberia poder iniciar sesion con google', () => {
//     return signInGoogle()
//       .then(() => {
//         expect('').toBe('');
//       });
//   });
// });

// describe('sesion cerrada', () => {
//   it('deberia poder cerrar sesion', () => {
//     return logOut()
//       .then(() => {
//         expect(firebase.auth().currentUser).toBe(null);
//       });
//  });
// });
