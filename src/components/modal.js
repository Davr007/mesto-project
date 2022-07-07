
const popupProfile = document.querySelector('#popup-profile'); 

const popupCards = document.querySelector('#popup-cards');

const cardsInputName = document.querySelector('#cards-name-input');

const cardsInputLink = document.querySelector('#cards-link-input');

import {popupProfileName} from './card.js';

import {profileName} from './card.js';

import {popupProfileJob} from './card.js';

import {profileJob} from './card.js';

import {formItem} from './index.js';

import {popupCard} from './card.js';


export function openPopup (item) {
    item.classList.add('popup_opened');
    const inputList = Array.from(item.querySelectorAll('.popup__input-text'));
    const formElement = item.querySelector('.popup__form');
    inputList.forEach((inputElement) => {
        inputElement.classList.remove('popup__input-text_type_error');
        formElement.querySelector(`#${inputElement.id}-error`).classList.remove('popup__input-error_active');
    });
    formElement.querySelector('.popup__button-submit').classList.add('popup__button-submit_inactive')
};

function closePopup (item) {
    item.classList.remove('popup_opened')
};

export function openPopupProfile () {
    openPopup(popupProfile);
    popupProfileName.value = profileName.textContent;
    popupProfileJob.value = profileJob.textContent;
};

export function closePopupProfile () {
    closePopup(popupProfile);
};

export function openPopupCards () {
    cardsInputName.value = '';
    cardsInputLink.value = '';
    openPopup(popupCards);
};


export function closePopupCards () {
    closePopup(popupCards)
};

export function closePopupCard() {
    closePopup(popupCard);
};


export function keyHandler (evt){
    const popupActive = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
        closePopup(popupActive);
    }
}

export function closeByOverlay (evt) {
    const popupActive = document.querySelector('.popup_opened');
    if (evt.target.classList.contains('popup_opened')){
        closePopup(popupActive);
    }
}