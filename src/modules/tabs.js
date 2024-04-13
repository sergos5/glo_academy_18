const tabs = () => {
    const tabPanel = document.querySelector('.service-header');
    const tabContent = document.querySelectorAll('.service-tab');


    tabPanel.addEventListener('click', (e) => {
        let tab = e.target.closest('.service-header-tab');
        console.log(tab)
    })


    console.log(tabPanel)



}

export default tabs;