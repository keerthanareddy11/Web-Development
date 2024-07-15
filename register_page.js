
let firstNameEl = document.getElementById("registerPageFirstName");
let lastNameEl = document.getElementById("registerPageLastName");
let emailEl = document.getElementById("registerPageEmail");
let passwordEl = document.getElementById("registerPagePass");
let confirmPassEl = document.getElementById("registerPageConfirmPass");
let submitBtnEL = document.getElementById("registerPagesubmitBtn");
let registerPageStatusFullText = document.getElementById("registerPageStatusFullText");


confirmPassEl.addEventListener("blur", function(event) {
    let password = passwordEl.value;
    let confirmPassword = event.target.value;
    if (password !== confirmPassword) {
        registerPageStatusFullText.textContent = "Passwords do not match";
        registerPageStatusFullText.style.color = "red";
    } else {
        registerPageStatusFullText.textContent = "";
    }
});
console.log("Script loaded");

submitBtnEL.addEventListener("click", function(event) {
    event.preventDefault();
    let firstName = firstNameEl.value.trim();
    let lastName = lastNameEl.value.trim();
    let email = emailEl.value.trim();
    let password = passwordEl.value;
    let confirmPass = confirmPassEl.value;

    if (firstName && lastName && email && password && confirmPass) {
        console.log("All the inputs are filled");
        if (password !== confirmPass) {
            registerPageStatusFullText.textContent = "Passwords do not match";
            registerPageStatusFullText.style.color = "red";
            return;
        }

        if (!isValidEmail(email)) {
            registerPageStatusFullText.textContent = "Invalid email format";
            registerPageStatusFullText.style.color = "red";
            return;
        }

        let fullName = firstName + " " + lastName;
        let userDetails = {
            Name: fullName,
            Email: email,
            Password: password
        };
        console.log("Created userDetails object properly");

        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        registerPageStatusFullText.textContent = "Registered Successfully";
        registerPageStatusFullText.style.color = "green";
        window.location.href = "login.html";
    } else {
        registerPageStatusFullText.textContent = "Please Enter all the Details";
        registerPageStatusFullText.style.color = "red";
    }
});

function isValidEmail(email) {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}