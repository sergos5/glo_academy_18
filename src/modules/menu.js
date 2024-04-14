const menu = () => {

    const menu = document.querySelector('menu');

    /* const menuBtn = document.querySelector('.menu');
    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    };

    menuBtn.addEventListener('click', handleMenu);

    menu.addEventListener('click', (e) => {
        if (e.target.matches('ul > li > a') || e.target.classList.contains('close-btn')) {
            handleMenu();
        }
    }); */

    document.addEventListener('click', (e) => {
        if (e.target.closest('.menu')) {
            menu.classList.add('active-menu');
        } else if (e.target.matches('ul > li > a') || e.target.classList.contains('close-btn') || !e.target.closest('menu')) {
            menu.classList.remove('active-menu');
        }
    });

};

export default menu;