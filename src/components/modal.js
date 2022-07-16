
export const popupProfile = document.querySelector('#popup-profile'); 

export const popupCards = document.querySelector('#popup-cards');

const cardsInputName = document.querySelector('#cards-name-input');

const cardsInputLink = document.querySelector('#cards-link-input');

const inputAvatar = document.querySelector('#avatar-link-input');

export const avatarImage = document.querySelector('.profile__avatar');

import {popupAvatar} from './card.js'

import {popupProfileName} from './card.js';

import {profileName} from './card.js';

import {popupProfileJob} from './card.js';

import {profileJob} from './card.js';

import {popupCard} from './card.js';

import {editProfile} from './api.js';

import {getUserAvatar} from './api.js';

export function openPopup (item) {
    item.classList.add('popup_opened');
    window.addEventListener('mousedown', closeByOverlay);
    document.addEventListener('keydown', keyHandler);
};

export function doFormBasic (item) {
    const formElement = item.querySelector('.popup__form');
    formElement.querySelector('.popup__button-submit').classList.add('popup__button-submit_inactive');
    const inputList = Array.from(item.querySelectorAll('.popup__input-text'));
    inputList.forEach((inputElement) => {
        inputElement.classList.remove('popup__input-text_type_error');
        formElement.querySelector(`#${inputElement.id}-error`).classList.remove('popup__input-error_active');
    });
}

function closePopup (item) {
    item.classList.remove('popup_opened');
    window.removeEventListener('mousedown', closeByOverlay);
    document.removeEventListener('keydown', keyHandler);
};

export function openPopupProfile () {
    openPopup(popupProfile);
    profileName.textContent = popupProfileName.value;
    profileJob.textContent = popupProfileJob.value;
    doFormBasic(popupProfile);
};


export function saveEditProfile () {

    loadChanges(popupProfile, 'Сохранение...');

    editProfile({name: popupProfileName.value, about: popupProfileJob.value})

    .then ((data) => {
        profileName.textContent = data.name;
        profileJob.textContent = data.about;
        console.log('Данные о пользователи изменены успешно')
    })

    .catch ((err) => {
        console.log(`При изменении данных о пользователи произошла ошибка: ${err}`)
    })

    .finally(() => {
        setTimeout(() => loadChanges(popupProfile, 'Сохранение...'), 1000)
    } )
};

export function closePopupProfile () {
    closePopup(popupProfile);
};


export function openPopupCards () {
    cardsInputName.value = '';
    cardsInputLink.value = '';
    openPopup(popupCards);
    doFormBasic(popupCards);
};

export function openPopupAvatar () {
    inputAvatar.value = '';
    openPopup(popupAvatar);
    doFormBasic(popupAvatar);
};

export function closePopupAvatar () {
    closePopup (popupAvatar)
};

export function closePopupCards () {
    closePopup(popupCards)
};

export function closePopupCard() {
    closePopup(popupCard);
};


export function keyHandler (evt){
    if (evt.key === 'Escape') {
        const popupActive = document.querySelector('.popup_opened');
        closePopup(popupActive);
    }
};

export function closeByOverlay (evt) {
    if (evt.target.classList.contains('popup_opened')){
        closePopup(evt.target);
    }
};


export function saveUserAvatar () {

    loadChanges(popupAvatar, 'Сохранение...');

    getUserAvatar({avatar: inputAvatar.value})

    .then ((data) => {
        avatarImage.src = data.avatar;
        console.log('Аватар изменен успешно')
    })

    .catch ((err) => {
        console.log(`Ошибка: ${err}`)
    })

    .finally(() => setTimeout(() => {loadChanges(popupAvatar, 'Сохраненить')}, 1000))
};

export const loadChanges = (popup, string) => {
    popup.querySelector('.popup__button-submit').textContent = string;
};