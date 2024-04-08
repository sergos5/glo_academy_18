const scroll = () => {

    const scrollItem = document.querySelector('main > a');
    const menuItems = document.querySelectorAll('menu > ul > li > a');
    const serviceBlock = document.getElementById('service-block');

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', (event) => {
            event.preventDefault();
            const idBlock = event.target.getAttribute('href');
            const block = document.querySelector(idBlock);
            block.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    scrollItem.addEventListener('click', (event) => {
        event.preventDefault();
        serviceBlock.scrollIntoView({
            behavior: "smooth"
        });
    });
};

export default scroll;