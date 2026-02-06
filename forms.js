document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        fullname: document.getElementById('fullname').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        position: document.getElementById('position').value,
        message: document.getElementById('message').value
    };

    // Utiliser Formspree pour envoyer les données
    fetch('https://formspree.io/f/mzdabbjz', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        // Afficher le message de succès
        document.getElementById('successMessage').classList.add('show');
        document.getElementById('registrationForm').reset();

        // Masquer le message après 5 secondes
        setTimeout(() => {
            document.getElementById('successMessage').classList.remove('show');
        }, 5000);
    })
    .catch(error => {
        console.error('Erreur:', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
    });
});
