// Get query parameters
const urlParams = new URLSearchParams(window.location.search);
document.getElementById("sender").innerText = urlParams.get("sender") || "Anonymous";
document.getElementById("receiver").innerText = urlParams.get("receiver") || "Friend";
document.getElementById("amount").innerText = urlParams.get("amount") || "0";

// Motivational quotes
const quotes = [
  "Eid is a day to cheer and to laugh with all your heart!",
  "Give generously, smile widely, and celebrate fully!",
  "A kind heart always gives the best salami!",
  "Joy shared is joy doubled — Happy Eid!",
  "Even fake salami brings real smiles!",
  "Let your kindness shine brighter than your Eidi!"
];
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
document.getElementById("quote").innerText = randomQuote;

// Generate custom link
function generateLink() {
  const sender = document.getElementById("newSender").value.trim();
  const receiver = document.getElementById("newReceiver").value.trim();
  const amount = document.getElementById("newAmount").value.trim();

  if (sender && receiver && amount) {
    const baseURL = window.location.origin + window.location.pathname;
    const link = `${baseURL}?sender=${encodeURIComponent(sender)}&receiver=${encodeURIComponent(receiver)}&amount=${encodeURIComponent(amount)}`;
    document.getElementById("generatedLink").innerText = link;
  } else {
    document.getElementById("generatedLink").innerText = "Please fill in all fields.";
  }
}
