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
    alert("Vui lòng xác thực lại mật khẩu.");
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
    alert("Tạo tài khoản thất bại, vui lòng kiểm tra kĩ lưỡng email hoặc mật khẩu.")
  });
}
signupForm.addEventListener("submit", signup);