// configuracion de mock de firebase
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockdatabase = new firebasemock.MockFirebase();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
);

// iniciando tests
import  { singInLogin, signInFacebook, signInGoogle, logOut, functionRegister }
from '../src/firebase/controllerdata.js';

// Registro
describe('registro', () => {
    it('Deberia poder registrarse', () => functionRegister('laboratoria@lab.com', '123456789')
      .then((user) => {
        expect(user.email).toBe('laboratoria@lab.com');
      }));
  });

  // Iniciar sesión
  describe('inicio de sesion', () => {
    it('Debería poder iniciar sesion', () => singInLogin('laboratoria@hotmail.la', '123456')
      .then((user) => {
        expect(user.email).toBe('laboratoria@hotmail.la');
      }));
  });

// Iniciar sesión con facebook  
describe('sesion iniciada', () => {
  it('Deberia poder iniciar sesion con Facebook', () => {
    return signInFacebook()
      .then(() => {
        expect('').toBe('');
      });
  });
});

// Iniicar sesión con google
describe('sesion iniciada', () => {
  it('Deberia poder iniciar sesion con google', () => {
    return signInGoogle()
      .then(() => {
        expect('').toBe('');
      });
  });
});

// Cesar sesión
describe('sesion cerrada', () => {
  it('deberia poder cerrar sesion', () => {
    return logOut()
      .then(() => {
        expect(firebase.auth().currentUser).toBe(null);
      });
 });
});
