const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');

    const appAnimate = () => {
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
    };

    const fadeAnimate = () => {
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
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            if (screen.width >= 768) appAnimate();
        });
    });

    closeBtn.addEventListener('click', () => {
        if (screen.width >= 768) {
            fadeAnimate();
        } else {
            modal.style.display = 'none';
        }
    });

};

export default modal;