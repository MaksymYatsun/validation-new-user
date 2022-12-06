const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordRepeat = document.getElementById('password-repeat');

document.addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordRepeatValue = passwordRepeat.value.trim();

  if (usernameValue === '') {
    setErrorFor(username, 'Username is blank');
  } else if (usernameValue < 5) {
    setErrorFor(username, 'Name is too short');
  } else {
    setSuccesFor(username)
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email is blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
  } else {
    setSuccesFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password is blank');
  } else if (passwordValue.length < 4) {
    setErrorFor(password, 'Password is too short')
  } else {
    setSuccesFor(password);
  }

  if (passwordRepeatValue === '') {
    setErrorFor(passwordRepeat, 'Repeat your password');
  } else if (passwordRepeatValue !== passwordValue) {
    setErrorFor(passwordRepeat, 'Passwords does not match');
  } else {
    setSuccesFor(passwordRepeat);
  }
};

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const formControlWrapper = input;
  const small = formControl.querySelector('small');
  formControlWrapper.className = 'shadow-md shadow-red-500 w-full p-4 rounded-3xl transition border border-transparent outline-none focus:shadow-red-300';
  small.classList = 'text-red-500 opacity-1';
  small.innerText = message;
};

function setSuccesFor(input) {
  const formControl = input.parentElement;
  const formControlWrapper = input;
  const small = formControl.querySelector('small');
  formControlWrapper.classList = 'shadow-md shadow-green-500 w-full p-4 rounded-3xl transition border border-transparent outline-none focus:shadow-green-300';
  small.className = 'opacity-0';
};

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}