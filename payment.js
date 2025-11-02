let currentStep = 1;

function showStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.step').forEach(step => {
        step.style.display = 'none';
    });

    // Show the requested step with proper display property
    const stepElement = document.getElementById(`step${stepNumber}`);
    if (stepElement) {
        if (stepElement.classList.contains('form-row')) {
            stepElement.style.display = 'grid';
        } else {
            stepElement.style.display = 'block';
        }
        currentStep = stepNumber;
    }
}

function nextStep() {
    if (currentStep === 1) {
        const branch = document.getElementById('pickupBranch').value;
        const card = document.getElementById('cardNumber').value;

        if (branch === 'Select branch' || !card.trim()) {
            alert('Please enter branch and credit card number');
            return;
        }
    }

    showStep(currentStep + 1);
}

function prevStep() {
    showStep(currentStep - 1);
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.step').forEach(step => {
        step.style.display = 'none';
    });

    showStep(1);

    // Load car data
    const carData = JSON.parse(localStorage.getItem('selectedCar'));
    if (carData) {
        document.getElementById('car-name').textContent = carData.name;
        document.getElementById('car-price').textContent = `S$${carData.price}/day`;
        document.getElementById('car-image').src = carData.image;
    }
});