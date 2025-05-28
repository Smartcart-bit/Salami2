// Sample motivational quotes
const quotes = [
    "May Allah bless you with endless joy!",
    "Eid Mubarak! May your life be filled with prosperity!",
    "Your kindness shines brighter than the Eid moon!",
    "May this Eid bring peace and happiness!",
    "Spread love and joy this Eid!"
];

// Send Eid Salami via WhatsApp
function sendSalami() {
    const sender = document.getElementById('sender').value || "Anonymous";
    const receiver = document.getElementById('receiver').value || "Friend";
    const amount = document.getElementById('amount').value || "0";
    const customMessage = document.getElementById('customMessage').value || quotes[Math.floor(Math.random() * quotes.length)];
    
    const whatsappMessage = `🎉 Eid Salami Alert! 🎉\nFrom: ${sender}\nTo: ${receiver}\nAmount: ${amount} 💸\nMessage: ${customMessage}\nEnjoy your special Eid moment!`;

    const whatsappLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, '_blank');
}

// Click animation effect
document.getElementById('joy-animation').addEventListener('click', function() {
    this.classList.add('animation:active');
});
