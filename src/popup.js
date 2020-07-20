//modal
const modalFunction = () => {
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
  //modal ends
};

//toggler starts
const togglerFunction = () => {
  const navItems = document.querySelector(".nav-items");
  const toggler = document.querySelector(".toggler");
  const navLinks = document.querySelectorAll(".nav-link p");
  const navLinkMeetUp = document.querySelector(".nav-link #meetup a");
  // add a dark overlay to the page when toggler is clicked
  toggler.addEventListener("click", () => {
    navItems.classList.toggle("nav-active");
    // navLinkMeetUp.style.animation = `navMeetup 0.5s ease forwards`;
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navFade 0.5s ease forwards ${index / 1 + 2}`;
      }
    });
    toggler.classList.toggle("burger-rotate");
  });
};

const app = () => {
  modalFunction();
  togglerFunction();
};

app();
