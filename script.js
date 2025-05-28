// Sample motivational quotes
const quotes = [
    "May Allah bless you with endless joy!",
    "Eid Mubarak! May your life be filled with prosperity!",
    "Your kindness shines brighter than the Eid moon!",
    "May this Eid bring peace and happiness!",
    "Spread love and joy this Eid!"
];

// Extract URL parameters
const urlParams = new URLSearchParams(window.location.search);
document.getElementById('sender').textContent = urlParams.get('sender') || "Anonymous";
document.getElementById('receiver').textContent = urlParams.get('receiver') || "Friend";
document.getElementById('amount').textContent = urlParams.get('amount') || "0";
document.getElementById('quote').textContent = quotes[Math.floor(Math.random() * quotes.length)];

// Send Eid Salami via WhatsApp
function sendSalami() {
    const sender = urlParams.get('sender') || "Anonymous";
    const receiver = urlParams.get('receiver') || "Friend";
    const amount = urlParams.get('amount') || "0";
    const customMessage = document.getElementById('customMessage').value || "Eid Mubarak!";
    const whatsappMessage = `🎉 Eid Salami Alert! 🎉\nFrom: ${sender}\nTo: ${receiver}\nAmount: ${amount} 💸\nMessage: ${customMessage}\nEnjoy your special Eid moment!`;

    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, '_blank');
}

// Click animation effect
document.getElementById('joy-animation').addEventListener('click', function() {
    this.classList.add('animation:active');
});
