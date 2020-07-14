let login = document.getElementById("log-In"); // get login
let modal = document.getElementById("modal"); //get modal
let closeBtn = document.getElementById("closebtn");

//define openModal
const openModal = () => {
  modal.style.display = "block";
};
const closeModal = () => {
  modal.style.display = "none";
};

login.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
