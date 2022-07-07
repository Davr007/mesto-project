export const validationObject = {
    formSelector: 'popup__form',
    inputSelector: 'popup__input-text',
    submitButtonSelector: 'popup__button-submit',
    inactiveButtonClass: 'popup__button-submit_inactive',
    inputErrorClass: 'popup__input-text_type_error',
    errorClass: 'popup__input-error_active'
  };

const showInputError = (formElement, inputElement, errorMessage, validObj) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(validObj.inputErrorClass);
    errorElement.classList.add(validObj.errorClass);
};

const hideInputError = (formElement, inputElement, validObj) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = '';
    inputElement.classList.remove(validObj.inputErrorClass);
    errorElement.classList.remove(validObj.errorClass);
};

const checkInputValidity = (formElement, inputElement, validObj) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, validObj)
    } else {
        hideInputError(formElement, inputElement, validObj)
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButtonState = (inputList, buttonElement, validObj) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(validObj.inactiveButtonClass)
    } else {
        buttonElement.classList.remove(validObj.inactiveButtonClass)
    }
};

const setEventListeners = (formElement, validObj) => {
   const inputList = Array.from(formElement.querySelectorAll(`.${validObj.inputSelector}`));
   const buttonElement = formElement.querySelector(`.${validObj.submitButtonSelector}`);
   toggleButtonState(inputList, buttonElement, validObj);
   inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
    checkInputValidity(formElement, inputElement, validObj);
    toggleButtonState(inputList, buttonElement, validObj);
    })
   })
};

export const enableValidation = (validObj) => {
    const formList = Array.from(document.querySelectorAll(`.${validObj.formSelector}`));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', () => {
            (evt) => {
                evt.preventDefault();
            };
        });
        setEventListeners(formElement, validObj)
    })
};

