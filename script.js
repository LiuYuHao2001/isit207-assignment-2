let loggedIn;

// Front-End Handler
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

// Login & Registration
// Helper to toggle views
function toggleView(idToShow) {
    const forms = ['loginForm', 'registerForm'];
    forms.forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    document.getElementById(idToShow).classList.remove('hidden');
}

// Registration
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    alert('Registration successful. You can now log in.');
    toggleView('loginForm');
});

// Login
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');

    if (email == "admin@mail.com" && password == "admin") {
        window.location.href = "admin.html";
        loggedIn = true;
    }
    else if (email === savedEmail && password === savedPassword) {
        document.getElementById('userEmail').textContent = email;
        window.location.href = "index.html";
        loggedIn = true;
    } else {
        alert('Invalid email or password');
    }
});

if (loggedIn == true){
    document.getElementById(log)
}

// Logout
function logout() {
    document.getElementById('userEmail').textContent = '';
    toggleView('loginForm');
}

// document.getElementsByClassName("card").addEventListener("click", VehicleChosen());

// function VehicleChosen() {
//     window.location.href = "payment.html";
// }

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
        const carId = this.getAttribute('data-car-id');
        // Redirect with car ID in URL
        window.location.href = `payment.html?carId=${carId}`;
    });
});

// payment.html
function getCarIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('carId');
}

// Use the car ID to display specific content
const selectedCarId = getCarIdFromURL();
console.log('Showing details for car:', selectedCarId);

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