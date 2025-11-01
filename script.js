// ===== MAIN WEBSITE JAVASCRIPT =====

// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeTabs();
    setupCarSelection();
    setupHeroButton();
});

// Tab switching for car categories
function initializeTabs() {
    const tabs = document.querySelectorAll('[data-tab-target]');
    const tabContents = document.querySelectorAll('[data-tab-content]');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget);

            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab and target content
            tab.classList.add('active');
            target.classList.add('active');
        });
    });
}

// Car selection functionality
function setupCarSelection() {
    const carCards = document.querySelectorAll('.card');

    carCards.forEach(card => {
        card.addEventListener('click', function() {
            const carName = this.querySelector('h4').textContent;
            const priceText = this.querySelector('p').textContent;
            const dailyPrice = parseFloat(priceText.replace(/[^\d.]/g, ''));

            // Store car data for the payment page
            const carData = {
                vehicle: carName,
                price: dailyPrice,
                image: this.querySelector('.car-image').src,
                category: this.closest('[data-tab-content]').id
            };

            // Save to sessionStorage
            sessionStorage.setItem('selectedCar', JSON.stringify(carData));

            // Redirect to payment page
            window.location.href = 'payment.html';
        });
    });
}

// Hero section "Reserve Your Car" button
function setupHeroButton() {
    const reserveButton = document.querySelector('.hero button');
    if (reserveButton) {
        reserveButton.addEventListener('click', function() {
            // Scroll to categories section
            document.querySelector('.categories').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}

// Utility function to start rental process (can be called from anywhere)
function startRentalProcess(vehicleName, dailyPrice, rentalDays = 3) {
    const rentalData = {
        vehicle: vehicleName,
        price: dailyPrice,
        rentalDays: rentalDays || 3,
        deposit: 150,
        damageCost: 0,
        insurance: 25,
        serviceFee: 10
    };

    sessionStorage.setItem('selectedCar', JSON.stringify(rentalData));
    window.location.href = 'payment.html';
}