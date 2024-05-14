  const countdownTime = 180;
  let remainingSeconds = countdownTime;
  let countdownInterval;
  async function updateCountdown() {
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    document.getElementById('countdown').textContent = formattedTime;

    remainingSeconds--;

    if (remainingSeconds < 0) {
      clearInterval(countdownInterval);
      document.getElementById('countdown').textContent = 'Time\'s up!';
      await redirectToHome();
    }
  }

  async function redirectToHome() {
    window.location.href = 'homeHTML.html';
    console.log('Redirecting to home page...');
  }

  window.onload = async function () {
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000); 

    document.getElementById('finish').addEventListener('click', async function () {
      clearInterval(countdownInterval);
    });
  };