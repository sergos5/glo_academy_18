import {
    animate
} from './helpers.js';

const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            if (screen.width >= 768) {
                animate({
                    duration: 500,
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
                    duration: 500,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modal.style.opacity = 1 - progress;
                    }
                });
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 500);
            } else {
                modal.style.display = 'none';
                modal.style.opacity = 0;
            }
        }
    });
};

export default modal;