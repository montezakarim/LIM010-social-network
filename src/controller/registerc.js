
export const functionRegister = (event) => {
    event.preventDefault();
    const email = document.querySelector('#txt-email-add').value;
    const password = document.querySelector('#txt-password-add').value;
    console.log(email);
    console.log(password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function (result) {
        alert('registrado');
        location.hash = '#/register';
      })
      .catch(error => {
        alert('Error');
      });
  };