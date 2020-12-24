import './index.scss';
const io = require('socket.io-client');

const socket = io.connect('http://localhost:9000', {
  transports: ['websocket']
});

socket.on('message', (data) => {
  console.log(data);
  socket.emit('some event', { userName: 'Jack' });
});

function loginForm() {
  const form = document.createElement('form');
  const emailInput = document.createElement('input');
  emailInput.id = 'email';
  emailInput.type = 'text';
  emailInput.placeholder = 'email';
  const passwordInput = document.createElement('input');
  passwordInput.id = 'password';
  passwordInput.type = 'text';
  passwordInput.placeholder = 'password';
  const registerButton = document.createElement('button');
  registerButton.type = 'submit';
  registerButton.innerHTML = 'Register';
  const loginButton = document.createElement('button');
  loginButton.type = 'submit';
  loginButton.innerHTML = 'Login';
  document.body.append(form);
  form.append(emailInput, passwordInput, registerButton, loginButton);
}

loginForm();
