export function validateEmail() {
    const emailEl = document.querySelector("#email");
    const form = document.querySelector("#signup");

    const isRequired = (value) => (value === "" ? false : true);

    const isEmailValid = (email) => {
        const re =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const checkEmail = () => {
        let valid = false;
        const email = emailEl.value.trim();
        if (!isRequired(email)) {
            showError(emailEl, "Email cannot be blank.");
        } else if (!isEmailValid(email)) {
            showError(emailEl, "Email is not valid.");
        } else {
            showSuccess(emailEl);
            valid = true;
        }
        return valid;
    };

    const showError = (input, message) => {
        // get the form-field element
        const formField = input.parentElement;
        // add the error class
        formField.classList.remove("success");
        formField.classList.add("error");

        // show the error message
        const error = formField.querySelector("small");
        error.textContent = message;
    };

    const showSuccess = (input) => {
        // get the form-field element
        const formField = input.parentElement;

        // remove the error class
        formField.classList.remove("error");
        formField.classList.add("success");

        // hide the error message
        const error = formField.querySelector("small");
        error.textContent = "";
    };

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // validate fields
        let isEmailValid = checkEmail();

        let isFormValid = isEmailValid;

        // submit to the server if the form is valid
        if (isFormValid) {
        }
    });

    const debounce = (fn, delay = 500) => {
        let timeoutId;
        return (...args) => {
            // cancel the previous timer
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            // setup a new timer
            timeoutId = setTimeout(() => {
                fn.apply(null, args);
            }, delay);
        };
    };

    form.addEventListener(
        "input",
        debounce(function (e) {
            e.target.id = checkEmail();
        })
    );
}
