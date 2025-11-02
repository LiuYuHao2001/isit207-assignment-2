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

     if (email == savedEmail && password == savedPassword) {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = "index.html";
    } else {
        alert('Invalid email or password');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const savedCar = localStorage.getItem('selectedCar');

    if (savedCar) {
        const car = JSON.parse(savedCar);

        console.log('Selected Car:', car);
        document.getElementById('car-title').textContent = car.name;
        document.getElementById('car-price').textContent = car.price;
        document.getElementById('car-image').src = car.image;
    }
});