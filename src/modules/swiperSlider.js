import Swiper from 'swiper';
import {
    Autoplay
} from 'swiper/modules';

export const swiperSlider = () => {
    const swiper = new Swiper('.swiper', {
        modules: [Autoplay],
        loop: true,
        autoplay: {
            delay: 1500,
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