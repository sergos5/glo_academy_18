const calc = () => {
    const calcBlock = document.querySelector('.calc-block');
    const calcSquareInput = calcBlock.querySelector('.calc-square');
    const calcCountInput = calcBlock.querySelector('.calc-count');
    const calcDayInput = calcBlock.querySelector('.calc-day');

    const enterOnlyNumbers = (input) => {
        input.value = input.value.replace(/\D/, "");
    };

    calcSquareInput.addEventListener('input', (e) => {
        e.preventDefault();
        enterOnlyNumbers(calcSquareInput);
    });

    calcCountInput.addEventListener('input', (e) => {
        e.preventDefault();
        enterOnlyNumbers(calcCountInput);
    });

    calcDayInput.addEventListener('input', (e) => {
        e.preventDefault();
        enterOnlyNumbers(calcDayInput);
    });


};

export default calc;