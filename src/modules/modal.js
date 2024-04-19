import {
    animate
} from './helpers.js';

const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');





    /* const appAnimate = () => {
        let count = 0;
        let idInterval;
        const showAppAnimate = () => {
            count += 0.05;
            idInterval = requestAnimationFrame(showAppAnimate);
            if (count <= 1) {
                modal.style.opacity = count;
            } else {
                cancelAnimationFrame(idInterval);
            }
        };
        showAppAnimate();
    }; */

    /* const fadeAnimate = () => {
        let count = 1;
        let idInterval;
        const showFadeAnimate = () => {
            count -= 0.05;
            idInterval = requestAnimationFrame(showFadeAnimate);
            if (count >= 0) {
                modal.style.opacity = count;
            } else {
                cancelAnimationFrame(idInterval);
                modal.style.display = 'none';
            }
        };
        showFadeAnimate();
    }; */









    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            if (screen.width >= 768) {
                animate({
                    duration: 1000,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modal.style.opacity = progress;
                    }
                });
            } else {
                modal.style.display = 'block';
                modal.style.opacity = 1;
            };
        });
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            if (screen.width >= 768) {
                animate({
                    duration: 1000,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modal.style.opacity = 1 - progress;
                    }
                });
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 1000);
            } else {
                modal.style.display = 'none';
                modal.style.opacity = 0;
            }
        }
    });
};

export default modal;