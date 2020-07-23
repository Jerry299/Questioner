// modal
const modalFunction = () => {
  const login = document.getElementById("log-In"); // get login
  const modal = document.getElementById("modal"); // get modal
  const closeBtn = document.getElementById("closebtn");
  const closeBtn2 = document.getElementById("closebtn2");
  const signUpModal = document.getElementById("signup-modal");
  const signUpBtn = document.getElementById("signUp");

  // define openModal
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
  // signUpBtn.addEventListener("click", closeSignUpModal);
  login.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  closeBtn2.addEventListener("click", closeSignUpModal);
  // modal ends
};

// toggler starts
const togglerFunction = () => {
  const navItems = document.querySelector(".nav-items");
  const toggler = document.querySelector(".toggler");
  const navLinks = document.querySelectorAll(".nav-link p");
  // const navLinkMeetUp = document.querySelector(".nav-link #meetup a");
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

// validate input function

const validateSignup = () => {
  // select html input element
  const signupName = document.getElementById("signup-name");
  const signupEmail = document.getElementById("signup-email");
  const signupPassword = document.getElementById("signup-password");
  const signupPassword2 = document.getElementById("signup-password2");
  const submitForm = document.getElementById("submit-btn2");

  // checkInput Func
  const checkInputs = () => {
    const nameRegex = /^[a-zA-Z ]{2,20}$/;
    const emailRegex = /[\w -]+@([\w -] +\.)+[\w -]+/;
    // get their values
    const name = signupName.value.trim();
    const email = signupEmail.value.trim();
    const password = signupPassword.value.trim();
    const password2 = signupPassword2.value.trim();

    // display error text
    const displayError = (element, message, cls) => {
      const parentElem = element.parentElement;
      const small = parentElem.querySelector("small");
      small.innerText = message;
      small.classList.add(cls);
    };

    // start checks
    if (nameRegex.test(name)) {
      signupName.classList.remove("error");
      signupName.classList.add("success");
      displayError(signupName, "Name is good to go", "success-text");
    } else {
      signupName.classList.remove("success");
      signupName.classList.add("error");
      displayError(
        signupName,
        "Name should be less 30 and more than 2",
        "error-text"
      );
    }

    // end of function
  };

  submitForm.addEventListener("click", checkInputs);
};

const app = () => {
  modalFunction();
  togglerFunction();
  validateSignup();
};

app();
