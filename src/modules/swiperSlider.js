import Swiper from 'swiper';

export const swiperSlider = () => {
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 500,
            disableOnInteraction: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            }
        }
    });
};