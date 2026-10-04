const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let getTimeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor(getTimeRemaining / 60 / 60);
    let minutes = Math.floor((getTimeRemaining / 60) % 60);
    let seconds = Math.floor(getTimeRemaining % 60);

    return {
      getTimeRemaining: getTimeRemaining,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    if (getTime.getTimeRemaining <= 0) {
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
      clearInterval(timerInterval);
      return;
    }

    timerHours.textContent =
      getTime.hours >= 10 ? getTime.hours : "0" + getTime.hours;
    timerMinutes.textContent =
      getTime.minutes >= 10 ? getTime.minutes : "0" + getTime.minutes;
    timerSeconds.textContent =
      getTime.seconds >= 10 ? getTime.seconds : "0" + getTime.seconds;
  };

  const timerInterval = setInterval(updateClock, 1000);
  updateClock();
};

export default timer;
