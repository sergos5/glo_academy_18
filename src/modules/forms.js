import {
    animate
} from './helpers.js';

const forms = () => {

    const userForm = document.querySelectorAll('[name="user_form"]');
    const formMess = document.querySelector('.mess');
    const modal = document.querySelector('.popup');
    const modalForm = document.querySelector('#form3');
    let postMess;

    /* const fadeAnimate = (elem) => {
        let count = 1;
        let idInterval;
        const showFadeAnimate = () => {
            count -= 0.05;
            idInterval = requestAnimationFrame(showFadeAnimate);
            if (count >= 0) {
                elem.style.opacity = count;
            } else {
                cancelAnimationFrame(idInterval);
                elem.style.display = 'none';
            }
        };
        showFadeAnimate();
    };

    const appAnimate = (elem) => {
        let count = 0;
        let idInterval;
        elem.style.display = 'block'
        const showAppAnimate = () => {
            count += 0.05;
            idInterval = requestAnimationFrame(showAppAnimate);
            if (count <= 1) {
                elem.style.opacity = count;
            } else {
                cancelAnimationFrame(idInterval);
                setTimeout(() => {
                    fadeAnimate(elem);
                }, 1500);
            }
        };
        showAppAnimate();
    }; */

    const createPostMess = () => {
        postMess = document.createElement('div');
        postMess.textContent = 'Данные отправлены!';
        postMess.style.cssText = `  position: fixed;  
                                    color: white;      
                                    font-size: 18px;
                                    position: fixed;
                                    padding-top: 35px;
                                    right: 0;
                                    left: 0;
                                    top: 50px;
                                    bottom: 0;
                                    width: 200px;
                                    height: 100px;
                                    z-index: 9;
                                    margin: 0 auto;
                                    background-color: rgba(0,0,0,.5);
                                    opacity: 0;
                                    display: none`;
        document.body.insertAdjacentElement("beforeend", postMess);
    };

    const showPostMess = () => {
        postMess.style.display = 'block';
        if (screen.width >= 768) {
            animate({
                duration: 500,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    postMess.style.opacity = progress;
                }
            });
            setTimeout(() => {
                animate({
                    duration: 500,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        postMess.style.opacity = 1 - progress;
                    }
                });
            }, 1500);
            setTimeout(() => {
                postMess.style.display = 'none';
            }, 2000);
        } else {
            postMess.style.display = 'block';
            postMess.style.opacity = 1;
            setTimeout(() => {
                postMess.style.display = 'none';
                postMess.style.opacity = 0;
            }, 1000);
        }
    };

    createPostMess();

    formMess.addEventListener('input', () => {
        formMess.value = formMess.value.replace(/[^а-я -]+/gi, "");
    });

    userForm.forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const inputName = form.querySelector('[placeholder="Ваше имя"]');
            const inputPhone = form.querySelector('[type=tel]');
            const inputEmail = form.querySelector('[type=email]');
            let isError = false;

            const addErrorMess = (act, input, mess) => {
                input.style.border = 'none';
                const pErrror = input.nextElementSibling;
                if (pErrror) pErrror.remove();
                if (act) {
                    const errorMess = document.createElement('p');
                    errorMess.textContent = mess;
                    errorMess.style.cssText = ` font-size: 12px;
                                                color: red;
                                                transform: ${getComputedStyle(input).transform}`;
                    input.style.border = '1px solid red';
                    input.insertAdjacentElement("afterend", errorMess);
                }
            };


            if (!(!/[^а-я^ ^-]+/i.test(inputName.value) && inputName.value !== "")) {
                addErrorMess(true, inputName, 'Введите Ваше имя');
                isError = true;
            } else {
                addErrorMess(false, inputName);
            }

            if (!/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(inputEmail.value)) {
                addErrorMess(true, inputEmail, 'email введен не корректно!');
                isError = true;
            } else {
                addErrorMess(false, inputEmail);
            }

            if (!(!/[^\d^\()^-]/.test(inputPhone.value) && inputPhone.value !== "")) {
                addErrorMess(true, inputPhone, 'Недопустимые символы');
                isError = true;
            } else {
                addErrorMess(false, inputPhone);
            }

            if (!isError) {
                if (event.target === modalForm && screen.width >= 768) {
                    animate({
                        duration: 500,
                        timing(timeFraction) {
                            return timeFraction;
                        },
                        draw(progress) {
                            modal.style.opacity = 1 - progress;
                        }
                    });
                    setTimeout(() => {
                        modal.style.display = 'none';
                    }, 500);
                } else if (event.target === modalForm) {
                    modal.style.display = 'none';
                    modal.style.opacity = 0;
                }
                /* inputName.value = '';
                inputEmail.value = '';
                inputPhone.value = '';
                formMess.value = ''; */

                showPostMess();
            }
        });
    });
};


export default forms;