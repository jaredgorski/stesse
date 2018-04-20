// Behavior when nav menu opened and closed
const menuTog = document.getElementById("burgerTog");
let weFade = document.getElementsByClassName("canFade");
let weClear = document.getElementsByClassName("canClear");
let weLeave = document.getElementsByClassName("canLeave");
let stopScroll = document.getElementsByClassName("stopScroll");
let classInstance;

document.getElementById("burgerTog").addEventListener("click",
function navOpen() {
  if (menuTog.checked == true) {
    document.getElementById("navOverlay").classList.add("navOpenOverlay");

    for (classInstance = 0; classInstance < weFade.length; classInstance++) {
      weFade[classInstance].classList.add("fadeOut");
    }
    for (classInstance = 0; classInstance < weClear.length; classInstance++) {
      weClear[classInstance].classList.add("clearOut");
    }
    for (classInstance = 0; classInstance < weLeave.length; classInstance++) {
      weLeave[classInstance].classList.add("iLeave");
    }
    for (classInstance = 0; classInstance < stopScroll.length; classInstance++) {
      stopScroll[classInstance].classList.add("noScroll");
    }
  } else {
    document.body.classList.remove("noScroll");
    document.getElementById("navOverlay").classList.remove("navOpenOverlay");

    for (classInstance = 0; classInstance < weFade.length; classInstance++) {
      weFade[classInstance].classList.remove("fadeOut");
    }
    for (classInstance = 0; classInstance < weClear.length; classInstance++) {
      weClear[classInstance].classList.remove("clearOut");
    }
    setTimeout(() => {
      for (classInstance = 0; classInstance < weLeave.length; classInstance++) {
        weLeave[classInstance].classList.remove("iLeave");
      };
    }, 240);
    for (classInstance = 0; classInstance < stopScroll.length; classInstance++) {
      stopScroll[classInstance].classList.remove("noScroll");
    }
  };
});
document.getElementById("navOverlay").addEventListener("click",
function clickOut() {
  if (menuTog.checked == true) {
    menuTog.checked = false;

    document.body.classList.remove("noScroll");
    document.getElementById("navOverlay").classList.remove("navOpenOverlay");

    for (classInstance = 0; classInstance < weFade.length; classInstance++) {
      weFade[classInstance].classList.remove("fadeOut");
    }
    for (classInstance = 0; classInstance < weClear.length; classInstance++) {
      weClear[classInstance].classList.remove("clearOut");
    }
    setTimeout(() => {
      for (classInstance = 0; classInstance < weLeave.length; classInstance++) {
        weLeave[classInstance].classList.remove("iLeave");
      };
    }, 240);
    for (classInstance = 0; classInstance < stopScroll.length; classInstance++) {
      stopScroll[classInstance].classList.remove("noScroll");
    }
  }
});




// DATA

var form = document.querySelector('.contact-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  let contactData = {
    firstName: document.querySelector('input[name="first-name"]').value,
    lastName: document.querySelector('input[name="last-name"]').value,
    fromEmail: document.querySelector('input[name="email-address"]').value,
    message: form.message.value,
  }

//savedata
  WeDeploy
    .data('stsdata-stesse.wedeploy.io')
    .create('contact', contactData)
    .then(function(response) {
      form.reset();
      form.item.focus();
      console.info('Saved:', response);
    })
    .catch(function(error) {
      console.error(error);
    });
//end





// EMAIL

let message = "First Name: " + form.firstName.value + "<br>Last Name: " +
form.lastName.value + "<br>Message: " + form.message.value;

// Insert post method below
WeDeploy
  .email('stsemail-stesse.wedeploy.io')
  .auth('email@wedeploy.com', 'pass')
  .from(form.fromEmail.value)
  .to('jared.gorski@liferay.com')
  .subject("Stesse Contact - New Message")
  .message(message)
  .send()
  .then(function(response) {
    form.reset();
    console.log(response);
    alert('Thank you for your message. We will get back to you shortly!');
  })
  .catch(function(error) {
    console.log(error);
    alert('There was an error. Please try again!');
  });
// Insert post method above
});