// This is the logic that will be hosted on jsDelivr
function updateCountdown() {
    // Set to 2026 so the timer counts DOWN, not UP
    const targetDate = new Date("May 1, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = targetDate - now;

    const timerElement = document.getElementById("timer");
    if (!timerElement) return;

    if (diff <= 0) {
        timerElement.textContent = "DOOMSDAY HAS ARRIVED";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    timerElement.textContent = `${days}D : ${hours}H : ${minutes}M : ${seconds}S`;
}

updateCountdown();
setInterval(updateCountdown, 1000);
