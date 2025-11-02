const carData = JSON.parse(localStorage.getItem('selectedCar'));
if (carData) {
    document.getElementById('car-name').textContent = carData.name;
    document.getElementById('car-price').textContent = `S$${carData.price}/day`;
    document.getElementById('car-image').src = carData.image;
}

// Handle form submission
document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    this.style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
});