const signupForm = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const passwordconfirmInput = document.getElementById("password-confirm");

function signup(event) {
  event.preventDefault();
  let email = emailInput.value;
  let password = passwordInput.value;
  let passwordConfirm = passwordconfirmInput.value;
  
  if (password != passwordConfirm){
    alert("Incorrect password");
  }
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    window.location.href = "index.html";
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Fail to create account");
  });
}
signupForm.addEventListener("submit", signup);