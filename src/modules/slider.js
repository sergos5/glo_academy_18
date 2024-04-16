const slider = (slBlock, sl, dBlock, slAct = 'slide-active', dtAct = 'dot-active') => {

    const sliderBlock = document.querySelector(slBlock);
    const slides = document.querySelectorAll(sl);
    const dotsBlock = document.querySelector(dBlock);
    const timeInterval = 2000;

    let dots;
    let currentSlide = 0;
    let interval;

    if (!sliderBlock) return;
    if (!slides) return;
    if (!dotsBlock) return;

    const addDots = () => {
        for (let i = 0; i < slides.length; i++) {
            const li = document.createElement('li');
            li.classList.add('dot');
            dotsBlock.append(li);
        }
        dots = dotsBlock.querySelectorAll('.dot');
        dots[0].classList.add(dtAct);
    };

    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    };

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    };

    const autoSlide = () => {
        prevSlide(slides, currentSlide, slAct);
        prevSlide(dots, currentSlide, dtAct);
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        };
        nextSlide(slides, currentSlide, slAct);
        nextSlide(dots, currentSlide, dtAct);
    };

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches('.dot, .portfolio-btn')) {
            return;
        }

        prevSlide(slides, currentSlide, slAct);
        prevSlide(dots, currentSlide, dtAct);

        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            });
        }
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, slAct);
        nextSlide(dots, currentSlide, dtAct);
    });

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlide();
        }
    }, true);

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval);
        }
    }, true);

    addDots();
    startSlide(timeInterval);
};

export default slider;