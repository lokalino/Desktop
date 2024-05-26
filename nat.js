let balance = 0;

// Funkcija za prikazivanje trenutnog salda
function displayBalance() {
    const balanceAmount = document.getElementById('balance-amount');
    balanceAmount.textContent = `$${balance.toFixed(2)}`;
}

// Funkcija za izvršenje transakcije
function performTransaction(amount, type) {
    if (type === 'deposit') {
        balance += amount;
    } else if (type === 'withdraw') {
        if (amount <= balance) {
            balance -= amount;
        } else {
            alert('Nemate dovoljno sredstava na računu.');
        }
    }
    displayBalance();
}

// Event listener za formu transakcije
document.getElementById('transaction-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const transactionType = document.querySelector('input[name="transaction-type"]:checked').value;
    performTransaction(amount, transactionType);
});

// Prikazivanje početnog salda
displayBalance();

// Funkcija za konvertovanje valute
function exchangeCurrency(amount, currency) {
    let exchangeRate;
    switch (currency) {
        case 'din':
            exchangeRate = 0.85; 
            break;
        case 'biticon':
            exchangeRate = 10000000; 
            break;
        case 'eur':
            exchangeRate = 0; 
            break;
        default:
            exchangeRate = 1;
    }
    return amount * exchangeRate;
}

// Event listener za formu menjačnice
document.getElementById('exchange-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('amount-exchange').value);
    const currency = document.getElementById('currency').value;
    const exchangedAmount = exchangeCurrency(amount, currency);
    alert(`${amount} ${currency.toUpperCase()} = ${exchangedAmount.toFixed(2)} EUR`);
});

// Event listener za formu otvaranja računa
document.getElementById('account-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    alert(`Hvala vam, ${name}! Vaš zahtev za otvaranje računa je uspešno primljen.`);
});
