const minutes = 25;
const duration = minutes * 60;

let secondsRemaining = duration;

function onTimerEnd() {
  console.log('\nВремя вышло!');
}

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

function updateTimer() {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`Осталось ${formatTime(secondsRemaining)}`);
  secondsRemaining -= 1;
  if (secondsRemaining >= 0) {
    setTimeout(updateTimer, 1000);
  } else {
    onTimerEnd();
  }
}

setTimeout(updateTimer, 0);

console.log(`Таймер запущен на ${minutes} минут`);