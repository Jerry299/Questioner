// modal
const modalFunction = () => {
  const login = document.getElementById("log-In"); // get login
  const modal = document.getElementById("modal"); // get modal
  const closeBtn = document.getElementById("closebtn");
  const closeBtn2 = document.getElementById("closebtn2");
  const signUpModal = document.getElementById("signup-modal");
  const signUpBtn = document.querySelectorAll(".signUp");

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
  for (let i = 0; i < signUpBtn.length; i++) {
    signUpBtn[i].addEventListener("click", openSignUpModal);
  }

  // signUpBtn.addEventListener("click", openSignUpModal);
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
  const checkInputs = (evt) => {
    evt.preventDefault();
    const nameRegex = /^[a-zA-Z ]{4,20}$/;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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

    if (emailRegex.test(email)) {
      signupEmail.classList.remove("error");
      signupEmail.classList.add("success");
      displayError(signupEmail, "Valid Email", "success-text");
    } else {
      signupEmail.classList.remove("success");
      signupEmail.classList.add("error");
      displayError(signupEmail, "Invalid Email", "error-text");
    }
    const passwordRegex = /^[A-Za-z]\w{7,14}$/;

    if (password === password2 && passwordRegex.test(password)) {
      signupPassword.classList.remove("error");
      signupPassword.classList.add("success");
      signupPassword2.classList.remove("error");
      signupPassword2.classList.add("success");
      displayError(signupPassword, "Valid Password", "success-text");
      displayError(signupPassword2, "Password Matched", "success-text");
    } else {
      signupPassword.classList.remove("success");
      signupPassword.classList.add("error");
      signupPassword2.classList.remove("success");
      signupPassword2.classList.add("error");
      displayError(signupPassword, "Invalid Password", "error-text");
      displayError(signupPassword2, "Password Do not Match", "error-text");
    }
    // end of function
  };

  submitForm.addEventListener("click", checkInputs);
};

// validate log in
const validateLogin = () => {};

// send data to the server
const signUpPostData = () => {
  const submitForm = document.getElementById("submit-btn2");

  submitForm.addEventListener("click", () => {
    const name = document.getElementById("signup-name").value;
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    console.log(name, email, password);
  });
};

// function app is the parent function
const app = () => {
  modalFunction();
  togglerFunction();
  validateSignup();
  signUpPostData();
};

app();
