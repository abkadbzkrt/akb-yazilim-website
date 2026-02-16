// JavaScript functionality for contact form and WhatsApp integration

// Contact Form Submission
function submitContactForm() {
    const form = document.getElementById('contactForm');
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    // Simple form validation
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Send form data (example using fetch API)
    fetch('https://example.com/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Message sent successfully!');
            form.reset();
        } else {
            alert('Error sending message.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// WhatsApp Integration
function openWhatsApp() {
    const message = encodeURIComponent('Hello there!');
    const phoneNumber = '1234567890'; // Replace with the actual number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}