// Simulacija baze podataka korisnika
let users = [
    { username: 'ivan', password: 'jankovic', name: 'Ivan Janković', email: 'ivan@example.com', phone: '123-456-7890' },
    { username: 'milan', password: 'ignjic', name: 'Korisnik Dva', email: 'korisnik2@example.com', phone: '098-765-4321' },
    { username: 'korisnik3', password: 'sifra3', name: 'Korisnik Tri', email: 'korisnik3@example.com', phone: '111-222-3333' }
];

// Funkcija za proveru korisnika
function authenticate(username, password) {
    return users.find(user => user.username === username && user.password === password);
}

// Funkcija za registraciju korisnika
function register(username, password, name, email, phone) {
    if (users.some(user => user.username === username)) {
        return false; // Korisničko ime već postoji
    }

    // Dodaj novog korisnika u bazu podataka
    users.push({ username, password, name, email, phone });
    return true;
}

// Event listener za formu prijave
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = this.querySelector('#username').value;
    const password = this.querySelector('#password').value;
    
    const user = authenticate(username, password);
    
    if (user) {
        alert(`Dobrodošli, ${user.name}!`);
        // Redirekcija na drugu stranicu nakon uspešne prijave
        window.location.href = 'nat.html';
    } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Pogrešno korisničko ime ili lozinka.';
    }
});

// Event listener za formu registracije
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = this.querySelector('#reg-username').value;
    const password = this.querySelector('#reg-password').value;
    const name = this.querySelector('#reg-name').value;
    const email = this.querySelector('#reg-email').value;
    const phone = this.querySelector('#reg-phone').value;
    
    const success = register(username, password, name, email, phone);
    
    if (success) {
        alert(`Uspešno ste se registrovali, ${name}!`);
    } else {
        alert('Korisničko ime već postoji. Molimo vas odaberite drugo korisničko ime.');
    }
});
