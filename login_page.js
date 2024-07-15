let login_page_emailEl = document.getElementById("login_page_email");
let login_page_passwordEl = document.getElementById("login_page_password");
let login_page_sign_in_btnEl = document.getElementById("login_page_sign_in_btn");


login_page_sign_in_btnEl.addEventListener("click", function(event){
    event.preventDefault();
    let email = login_page_emailEl.value;
    let password = login_page_passwordEl.value;

    if (email && password) {
        let localStorageData = localStorage.getItem("userDetails");
        if (localStorageData) {
            let parsedLocalStorageData = JSON.parse(localStorageData);

            if (email === parsedLocalStorageData.Email && password === parsedLocalStorageData.Password) {
                window.location.href = "index.html";
            }
            else {
                alert("Entered email or password is incorrrect");
            }
        }
        else {
            alert("Please SignUp First");
            window.location.href = "register.html";
        }
    }
    else {
        alert("Enter all the details to login In");
    }
});