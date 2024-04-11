const forms = () => {

    const userForm = document.querySelectorAll('[name="user_form"]');
    const formMess = document.querySelector('.mess');

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

            if (!(!/[^а-я^ ^-]+/i.test(inputName.value) && inputName.value !== "")) {
                console.log('введите Ваше имя на кириллице!');
                isError = true;
            }
            if (!/^[\w]+@[\w-]+\.[a-z]{2,5}$/i.test(inputEmail.value) && inputEmail.value !== "") {
                console.log('email введен не корректно!');
                isError = true;
            }
            if (!(!/[^\d^\()^-]/.test(inputPhone.value) && inputPhone.value !== "")) {
                console.log('Введите номер телефона, используя цифры, (), -');
                isError = true;
            }
            if (!isError) {
                console.log(`Имя: ${inputName.value}`);
                console.log(`Телефон: ${inputPhone.value}`);
                console.log(`email: ${inputEmail.value}`);
                console.log(`Сообщение: ${formMess.value}`);
                console.log('Форма отправлена');
            }
        });
    });
};

export default forms;