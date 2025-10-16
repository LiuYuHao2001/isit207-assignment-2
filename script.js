let loggedIn = false;

// Login-Logout Handler
function loginHandler() {
    if (loggedIn == false) {
        loggedIn = true;
        document.getElementById("loginButton").textContent = "Login";
        console.log("User has logged in.")
    }
    else {
        loggedIn = false;
        document.getElementById("loginButton").textContent = "Logout";
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


// Simulated Back-End
// Customer reserves car – via the AZoom Car Rental website using a credit card
var chosenVehicle
var dailyRent
var customerCreditCard
// Customer rents car at the AZoom Car Rental office (Check that customer has picked up the vehicle)
var pickedUp // Boolean
var rentDuration
// Customer returns car at a designated car park
var returned // Boolean
// Employee of AZoom Car Rental inspects the returned car – to ensure no damages
var inspected // Boolean
// Customer pays final bill – cost of rental and including any damages found 
var rentalCost = dailyRent * rentDuration
var damageCost = Math.floor(Math.random() * 100)
var paymentDue = rentalCost + damageCost;



// Login & Registration
class Login {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

const employee1 = new Login("Employee", "password");
const user1 = new Login("Test User", "password");

let userDatabase = [user1]

var inputtedUsername
var inputtedPassword

function Register(username, password) {
    userDatabase[userDatabase.length++] = new Login(username, password)
}

registerButton = getElementById("register");
registerButton.addEventListener("click", Register(inputtedPassword, inputtedUsername));