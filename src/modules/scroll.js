const scroll = () => {

    const scrollItem = document.querySelector('main > a');
    const menuItems = document.querySelectorAll('menu > ul > li > a');
    const serviceBlock = document.getElementById('service-block');
    const portfolioBlock = document.getElementById('portfolio');
    const calcBlock = document.getElementById('calc');
    const commandBlock = document.getElementById('command');
    const connectBlock = document.getElementById('connect');

    const arrBloks = [
        serviceBlock,
        portfolioBlock,
        calcBlock,
        commandBlock,
        connectBlock
    ];

    menuItems.forEach((menuItem, index) => {
        menuItem.addEventListener('click', (event) => {
            event.preventDefault();
            arrBloks[index].scrollIntoView({
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