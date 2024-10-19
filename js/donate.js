document.getElementById('donate-btn').addEventListener('click', function () {
    showSectionById('add-money-btn', 'history-container');
});

document.getElementById('history-btn').addEventListener('click', function () {
    showSectionById('history-container', 'add-money-btn');
});

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

    // Adding to history
    let historyEntry = document.createElement('div');
    historyEntry.classList.add('history-entry');

    let donationTitle;
    if(cardId === 'my_modal_1'){
        donationTitle = `${donationAmount} Taka is Donated for Flood Relief in Noakhali, Bangladesh`;
    } else if(cardId === 'my_modal_2'){
        donationTitle = `${donationAmount} Taka is Donated for famine-2024 at Feni, Bangladesh`;
    } else if(cardId === 'my_modal_3'){
        donationTitle = `${donationAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;
    }

    let currentDate = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Dhaka',
        timeZoneName: 'long'
    });

    historyEntry.innerHTML = `
        <h4>${donationTitle}</h4>
        <p class="date">Date: ${currentDate}</p>
    `;

    document.getElementById('history-container').appendChild(historyEntry);
}






