const openCardImage = document.querySelector('.popup__open-card-image');

const openCardName = document.querySelector('.popup__open-card-title');

export const cardTemplate = document.querySelector('#card-template').content;

export const inputCardName = document.querySelector('#cards-name-input');

export const inputCardImage = document.querySelector('#cards-link-input');

export const profileName = document.querySelector('.profile__name');

export const profileJob = document.querySelector('.profile__job');

export const popupCard = document.querySelector('#open-card');

export const popupProfileName = document.querySelector('#profile-name-input');

export const popupProfileJob = document.querySelector('#profile-job-input');

export const popupAvatar = document.querySelector('#popup-avatar')

export const cardsPlace = document.querySelector('.cards');

  import { createCard } from './index.js';

  import {openPopup} from './modal.js';



export function renderCard (data, container, userId, handleChangeLikeStatus) {
  const card = createCard(data, userId, handleChangeLikeStatus);
  container.prepend(card);
};

export function deleteCard(evt) {
    const eventTarget = evt.target;

    eventTarget.closest('.card').remove();
};

export function handleClickCard (name, image) {
    openCardImage.src = image;

    openCardImage.alt = name;

    openCardName.textContent = name;

    openPopup(popupCard);
}
