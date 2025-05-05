// Dummy real-time updates
const zerodhaUpdates = [
  "TCS +1.2%",
  "Infosys -0.8%",
  "HDFC Bank +0.5%",
  "Reliance +0.9%"
];

const motilalUpdates = [
  "ICICI Bank +1.1%",
  "Axis Bank -0.6%",
  "Wipro +2.3%",
  "Tata Steel +1.7%"
];

function cycleUpdates(elementId, updates) {
  let index = 0;
  const element = document.getElementById(elementId);
  setInterval(() => {
    element.textContent = updates[index];
    index = (index + 1) % updates.length;
  }, 2000);
}

cycleUpdates("zerodha-stock-updates", zerodhaUpdates);
cycleUpdates("motilal-stock-updates", motilalUpdates);

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Login button action (placeholder)
document.getElementById("login-smtp-btn").addEventListener("click", () => {
  alert("Redirecting to SMTP login... (mock)");
});
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

document.getElementById("login-smtp-btn").addEventListener("click", () => {
  alert("SMTP Login clicked — Implement logic here!");
});

