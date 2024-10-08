function getBalance() {
    const balanceText = document.querySelector('.navbar-end a').innerText;
    return parseInt(balanceText.replace(' BDT', ''));
}

function updateBalance(newBalance) {
    document.querySelector('.navbar-end a').innerText = newBalance + ' BDT';
}

function getDonationAmount(cardElement) {
    const donationText = cardElement.querySelector('.card-body a').innerText;
    return parseInt(donationText.replace(' BDT', ''));
}

function updateDonationAmount(cardElement, newAmount) {
    cardElement.querySelector('.card-body a').innerText = newAmount + ' BDT';
}

function handleDonate(cardId) {

    const cardElement = document.getElementById(cardId).closest('.card');

    let balance = getBalance();

    const donationInput = cardElement.querySelector('input[type="txt"]');
    let donationAmount = parseInt(donationInput.value);

    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert('Please enter a valid positive number for donation.');
        return;
    }
    if (donationAmount > balance) {
        alert('You do not have enough balance to make this donation.');
        return;
    }

    let newBalance = balance - donationAmount;
    updateBalance(newBalance);

    let currentDonation = getDonationAmount(cardElement);
    let newDonationAmount = currentDonation + donationAmount;
    updateDonationAmount(cardElement, newDonationAmount);

    donationInput.value = '';

    document.getElementById(cardId).showModal();
}
