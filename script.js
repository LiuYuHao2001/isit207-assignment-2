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
    const forms = ['loginForm', 'registerForm', 'resetForm', 'welcome'];
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
    if (email === savedEmail && password === savedPassword) {
        document.getElementById('userEmail').textContent = email;
        toggleView('welcome');
    } else {
        alert('Invalid email or password');
    }
});

// Reset Password
document.getElementById('resetForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const resetEmail = document.getElementById('resetEmail').value;
    const savedEmail = localStorage.getItem('userEmail');
    if (resetEmail === savedEmail) {
        alert('Password reset link sent to your email (simulated)');
        toggleView('loginForm');
    } else {
        alert('Email not found in system.');
    }
});

// Logout
function logout() {
    document.getElementById('userEmail').textContent = '';
    toggleView('loginForm');
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
