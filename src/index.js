import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import scroll from './modules/scroll';
import calc from './modules/calc';
import forms from './modules/forms';
import tabs from './modules/tabs';
import slider from './modules/slider';


timer('22 april 2024');
menu();
modal();
scroll();
calc(100);
forms();
tabs();
slider('.portfolio-content', '.portfolio-item', '.portfolio-dots',
    'portfolio-item-active', 'dot-active');