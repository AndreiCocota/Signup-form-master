var firstName = document.getElementById("exampleInputFirstName");
var lastName = document.getElementById("exampleInputLastName");
var email = document.getElementById("exampleInputEmail");
var password = document.getElementById("exampleInputPassword");




function checkVal() {
    if (firstName.value == "") {
        document.getElementById("firstName-valid").innerHTML = "First Name cannot be empty";
        firstName.setAttribute("placeholder", "");
        firstName.style.borderColor = "hsl(0, 100%, 74%)";
        var img = document.createElement("img");
        img.src = "images/icon-error.svg";
        var src = document.getElementById("exampleInputFirstName");
        src.appendChild(img);
    }
    if (lastName.value == "") {
        document.getElementById("lastName-valid").innerHTML = "Last Name cannot be empty";
        lastName.setAttribute("placeholder", "");
        lastName.style.borderColor = "hsl(0, 100%, 74%)";

    }
    if (email.value == "") {
        document.getElementById("mail-valid").innerHTML = "Looks like is not an email";
        email.setAttribute("placeholder", "  email@example/com");
        email.style.color="hsl(0, 100%, 74%)";
        email.style.borderColor = "hsl(0, 100%, 74%)";

    }
    if (password.value == "") {
        document.getElementById("password-valid").innerHTML = "Password cannot be empty";
        password.setAttribute("placeholder", "");
        password.style.borderColor = "hsl(0, 100%, 74%)";

    }

    return false;
}