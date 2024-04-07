const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
        const dateStop = new Date(deadline).getTime();
        const dateNow = new Date().getTime();
        const timeRemaining = (dateStop - dateNow) / 1000;
        const hours = Math.floor(timeRemaining / 60 / 60);
        const minutes = Math.floor((timeRemaining / 60) % 60);
        const seconds = Math.floor(timeRemaining % 60);
        return {
            timeRemaining,
            hours,
            minutes,
            seconds
        };
    };

    const updateClock = () => {
        const getTime = getTimeRemaining();

        const addZero = (num) => {
            if (num <= 9) {
                return '0' + num;
            } else {
                return num;
            }
        };

        if (getTime.timeRemaining <= 0) {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
            clearInterval(clockInterval);
        } else {
            timerHours.textContent = addZero(getTime.hours);
            timerMinutes.textContent = addZero(getTime.minutes);
            timerSeconds.textContent = addZero(getTime.seconds);
        }
    };

    const clockInterval = setInterval(updateClock, 1000);

};

export default timer;