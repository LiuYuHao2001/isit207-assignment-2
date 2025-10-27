let loggedIn = false;

// Login-Logout Handler
function loginHandler(username, password) {
    for (i = 0; i < userDatabase.length; i++) {
        if (username == userDatabase[i].username) {
            if (password == userDatabase[i].password) {
                loggedIn = true;
                console.log("User " + username + " has logged in.")
                window.location.replace("index.html");
            }
        }
        else console.log("Wrong username or password");
    }

    if (loggedIn == false) {
        document.getElementById("loginButton").textContent = "Logout";
    }
    else {
        loggedIn = false;
        document.getElementById("loginButton").textContent = "Login";
        console.log("User has logged out.")
    }
}

// Tab Handler
const tabList = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabList.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')

        tabList.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})

// Front-End Input Handler

// Login & Registration
class Login {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

const employee1 = new Login("Employee", "password");
const customer1 = new Login("Test User", "password");
let newCustomer = new Login(null, null);

let userDatabase = [employee1, customer1]
loginForm = getElementById("login-form");

// Check if input is correct
let loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", loginHandler(loginForm.username, loginForm.password));

let signUpButton = document.getElementById("sign-up-button");
signUpButton.addEventListener("click", SignUp(loginForm.username, loginForm.password));

function SignUp(username, password) {
    userDatabase[userDatabase.length++] = new Login(username, password);
}

// Simulated Back-End

// Employee Side
// Customer reserves car – via the AZoom Car Rental website using a credit card
let chosenVehicle;
let dailyRent;
let customerCreditCard;
// Customer rents car at the AZoom Car Rental office (Check that customer has picked up the vehicle)
let pickedUp; // Boolean
let rentDuration;
// Customer returns car at a designated car park
let returned; // Boolean
// Employee of AZoom Car Rental inspects the returned car – to ensure no damages
let inspected; // Boolean
// Customer pays final bill – cost of rental and including any damages found 
let rentalCost = dailyRent * rentDuration;
let damageCost;
let paymentDue = rentalCost + damageCost;

// let inputtedUsername
// let inputtedPassword


// Helper to toggle views
function toggleView(idToShow) {
    const forms = ['loginForm', 'registerForm', 'resetForm', 'welcome'];
    forms.forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    document.getElementById(idToShow).classList.remove('hidden');
}

// Simulate register
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    localStorage.setItem('username', email);
    localStorage.setItem('password', password);
    alert('Registration successful. You can now log in.');
    toggleView('loginForm');
});

// Simulate login
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('inputted-username').value;
    const password = document.getElementById('inputted-password').value;
    const savedEmail = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');
    if (email === savedEmail && password === savedPassword) {
        document.getElementById('username').textContent = email;
        toggleView('welcome');
    } else {
        alert('Invalid email or password');
    }
});

// Simulate logout
function logout() {
    document.getElementById('username').textContent = '';
    toggleView('loginForm');
}