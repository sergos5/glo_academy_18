const menu = () => {

    const menu = document.querySelector('menu');

    document.body.addEventListener('click', (e) => {
        if (e.target.closest('.menu')) {
            menu.classList.add('active-menu');
        } else if (e.target.matches('ul > li > a') || e.target.classList.contains('close-btn') || !e.target.closest('menu')) {
            menu.classList.remove('active-menu');
        }
    });

};

export default menu;