const signinForm = document.getElementById("signin-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

function signin(event) {
  event.preventDefault();
  let email = emailInput.value;
  let password = passwordInput.value;

firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    window.location.href = "index.html";
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert("Đăng nhập tài khoản thất bại, vui lòng kiểm tra lại email hoặc mật khẩu.")
  });
}
signinForm.addEventListener("submit", signin);