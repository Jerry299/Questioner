let login = document.getElementById("log-In"); // get login
let modal = document.getElementById("modal"); //get modal
let closeBtn = document.getElementById("closebtn");
let closeBtn2 = document.getElementById("closebtn2");
const signUpModal = document.getElementById("signup-modal");
const signUpBtn = document.getElementById("signUp");

//define openModal
const openModal = () => {
  modal.style.display = "block";
};
const closeModal = () => {
  modal.style.display = "none";
};
const openSignUpModal = () => {
  signUpModal.style.display = "block";
};
const closeSignUpModal = () => {
  signUpModal.style.display = "none";
};

signUpBtn.addEventListener("click", openSignUpModal);
//signUpBtn.addEventListener("click", closeSignUpModal);
login.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
closeBtn2.addEventListener("click", closeSignUpModal);
