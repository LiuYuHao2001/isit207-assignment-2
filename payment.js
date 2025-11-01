// Payment Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    if (!Auth.requireAuth()) return;

    // Check if car is selected
    const selectedCar = localStorage.getItem('selectedCar');
    if (!selectedCar) {
        alert('Please select a car first');
        window.location.href = 'index.html';
        return;
    }

    // Display selected car info
    const car = JSON.parse(selectedCar);
    console.log('Processing payment for:', car);

    document.getElementById('car-title').textContent = car.name;
    document.getElementById('car-price').textContent = car.price;
    document.getElementById('car-image').src = car.image;

    // Calculate and update price based on rental period
    function updatePrice() {
        const rentalPeriod = document.getElementById('rentalPeriod').value;
        const basePrice = parseInt(car.price.replace('S$', '').replace('/day', ''));
        let totalPrice = basePrice;

        switch(rentalPeriod) {
            case 'weekly':
                totalPrice = basePrice * 7 * 0.95; // 5% discount
                break;
            case 'monthly':
                totalPrice = basePrice * 30 * 0.90; // 10% discount
                break;
            default:
                totalPrice = basePrice;
        }

        const payButton = document.querySelector('.btn-pay');
        payButton.textContent = `Complete Booking - S$${totalPrice.toFixed(2)}`;
    }

    // Format credit card number
    document.getElementById('cardNumber').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        let formattedValue = '';

        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += ' ';
            }
            formattedValue += value[i];
        }

        e.target.value = formattedValue;
    });

    // Format expiry date
    document.getElementById('expiryDate').addEventListener('input', function(e) {
        let value = e.target.value.replace(/\//g, '').replace(/[^0-9]/gi, '');

        if (value.length >= 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }

        e.target.value = value;
    });

    // Only allow numbers for CVV
    document.getElementById('cvv').addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });

    // Update price when rental period changes
    document.getElementById('rentalPeriod').addEventListener('change', updatePrice);

    // Payment form submission
    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic form validation
            const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
            const expiryDate = document.getElementById('expiryDate').value;
            const cvv = document.getElementById('cvv').value;
            const cardName = document.getElementById('cardName').value;
            const rentalPeriod = document.getElementById('rentalPeriod').value;
            const pickupBranch = document.getElementById('pickupBranch').value;

            if (!cardNumber || !expiryDate || !cvv || !cardName || !rentalPeriod || !pickupBranch) {
                alert('Please fill in all fields');
                return;
            }

            if (cardNumber.length !== 16) {
                alert('Please enter a valid 16-digit credit card number');
                return;
            }

            if (cvv.length !== 3) {
                alert('Please enter a valid 3-digit CVV');
                return;
            }

            // Process payment (simulated)
            const userEmail = Auth.getCurrentUser();
            const bookingDetails = {
                user: userEmail,
                car: car,
                rentalPeriod: rentalPeriod,
                pickupBranch: pickupBranch,
                totalAmount: document.querySelector('.btn-pay').textContent,
                bookingDate: new Date().toLocaleDateString()
            };

            // Save booking details
            localStorage.setItem('lastBooking', JSON.stringify(bookingDetails));

            // Show success message
            alert(`Booking confirmed! Thank you for choosing AZoom Car Rental.\n\nBooking Details:\n- Car: ${car.name}\n- Pickup: ${Branches[pickupBranch].name}\n- Amount: ${document.querySelector('.btn-pay').textContent}\n\nYou will receive a confirmation email at ${userEmail}`);

            // Clear selection and redirect
            localStorage.removeItem('selectedCar');
            window.location.href = 'index.html';
        });
    }

    // Initialize price display
    updatePrice();
});