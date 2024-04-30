import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import scroll from './modules/scroll';
import calc from './modules/calc';
import tabs from './modules/tabs';
import slider from './modules/slider';
import sendForm from './modules/sendForm';
import {
    swiperSlider
} from './modules/swiperSlider';

const userForm = document.querySelectorAll('[name="user_form"]');
userForm.forEach((form) => {
    sendForm({
        formId: form.id,
        someElem: [{
            type: 'block',
            id: 'total'
        }]
    });
});


timer('9 may 2024');
menu();
modal();
scroll();
calc(100);
tabs();
slider('.portfolio-content', '.portfolio-item', '.portfolio-dots',
    'portfolio-item-active', 'dot-active');
swiperSlider();