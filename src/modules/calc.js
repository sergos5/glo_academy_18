import {
    animate
} from './helpers.js';

const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = calcBlock.querySelector('.calc-type');
    const calcSquare = calcBlock.querySelector('.calc-square');
    const calcCount = calcBlock.querySelector('.calc-count');
    const calcDay = calcBlock.querySelector('.calc-day');
    const total = document.getElementById('total');

    const enterOnlyNumbers = (input) => {
        input.value = input.value.replace(/\D/, "");
    };


    /*     const showAnimateResult = (resultlValue) => {
            let start = +total.textContent;
            const end = +resultlValue;
            const num = (end - start) / 50;
            let counter = 0;
            const idInterval = setInterval(() => {
                start = Math.floor(start + num);
                total.textContent = start;
                counter++;
                if (counter === 50) {
                    total.textContent = Math.floor(resultlValue);
                    clearInterval(idInterval);
                }
            }, 10);
        }; */


    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = calcSquare.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;


        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        } else {
            totalValue = 0;
        }

        animate({
            duration: 500,
            timing(timeFraction) {
                return Math.pow(timeFraction, 2);
            },
            draw(progress) {
                total.textContent = Math.floor(+total.textContent +
                    (+totalValue - +total.textContent) * progress);

            }
        });


        //showAnimateResult(totalValue);
    };

    calcBlock.addEventListener('input', (e) => {
        if (e.target === calcSquare || e.target === calcCount || e.target === calcDay) {
            e.preventDefault();
            enterOnlyNumbers(e.target);
        }
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
            countCalc();
        }
    });
};

export default calc;