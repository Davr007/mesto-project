const cardsAddButton = document.querySelector('.profile__add-button');

export const formItem = document.querySelector('#popup-edit-form');

const cardsFormCloseButton = document.querySelector('#close-card-popup');

const profileEditButton = document.querySelector('.profile__edit-button');

const profileCloseEdit = document.querySelector('#close-profile-popup');

const popupCloseCards = document.querySelector('#close-cards-popup');

const cardFormSubmit = document.querySelector('#popup-add-form');

import {closeByOverlay} from './modal.js';

import {openPopupProfile} from './modal.js';

import {closePopupProfile} from './modal.js';

import {keyHandler} from './modal.js';

import {openPopupCards} from './modal.js';

import {closePopupCards} from './modal.js';

import {closePopupCard} from './modal.js';

import {formSubmitHandler} from './card.js';

import {addCard} from './card.js';

window.addEventListener('mousedown', closeByOverlay);
//обработчики открывания и закрывания попапов
profileEditButton.addEventListener('click', openPopupProfile);
profileCloseEdit.addEventListener('click', closePopupProfile);
document.addEventListener('keydown', keyHandler);
cardsAddButton.addEventListener ('click', openPopupCards);
popupCloseCards.addEventListener ('click', closePopupCards);
cardsFormCloseButton.addEventListener('click', closePopupCard);

//обработчик карточек 

formItem.addEventListener('submit', formSubmitHandler); 
cardsAddButton.addEventListener ('click', openPopupCards);
cardFormSubmit.addEventListener('submit', addCard); 