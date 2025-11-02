document.addEventListener('DOMContentLoaded', function () {
    initializeTabs();
});

// tab switching for car categories
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

// save chosen car for payment
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
        const carData = {
            id: this.dataset.carId,
            price: this.dataset.carPrice,
            name: this.querySelector('h4').textContent,
            image: this.querySelector('.car-image').src  // Save image URL
        };

        localStorage.setItem('selectedCar', JSON.stringify(carData));
        window.location.href = 'payment.html';
    });
});

const carData = JSON.parse(localStorage.getItem('selectedCar'));
console.log(carData);