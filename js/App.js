// Sign In

var SignInPassword = document.getElementById("SignInPassword");
var SignInEmail = document.getElementById("SignInEmail");
SignIn = () =>{
    alert(`email is ${SignInEmail.value} && password is ${SignInPassword.value}`)
}
SignInShowPassword = () =>{
    SignInPassword.type = "text";
    document.getElementById("SignInHidePassword").style.display = "block";
    document.getElementById("SignInShowPassword").style.display = "none";
}
SignInHidePassword = () =>{
    SignInPassword.type = "password";
    document.getElementById("SignInHidePassword").style.display = "none";
    document.getElementById("SignInShowPassword").style.display = "block";
}


// Sign Up

var User = document.getElementById("User");
var SignUpPassword = document.getElementById("SignUpPassword");
var SignUpEmail = document.getElementById("SignUpEmail");
SignUp = () =>{
    alert(`User is ${User.value} email is ${SignUpEmail.value} && password is ${SignUpPassword.value}`)
}
SignUpShowPassword = () =>{
    SignUpPassword.type = "text";
    document.getElementById("SignUpHidePassword").style.display = "block";
    document.getElementById("SignUpShowPassword").style.display = "none";
}
SignUpHidePassword = () =>{
    SignUpPassword.type = "password";
    document.getElementById("SignUpHidePassword").style.display = "none";
    document.getElementById("SignUpShowPassword").style.display = "block";
}

// PopOver
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// Tooltip
var exampleEl = document.getElementById('Tooltip')
var tooltip = new bootstrap.Tooltip(exampleEl, {
  boundary: document.body // or document.querySelector('#boundary')
})
