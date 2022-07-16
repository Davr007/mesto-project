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

// const initialCards = [
//     {
//       name: 'Архыз',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
//     },
//     {
//       name: 'Челябинская область',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
//     },
//     {
//       name: 'Иваново',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
//     },
//     {
//       name: 'Камчатка',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
//     },
//     {
//       name: 'Холмогорский район',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
//     },
//     {
//       name: 'Байкал',
//       link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
//     }
//   ];

  import {closePopupProfile} from './modal.js';

  import { createCard } from './index.js';

  import {openPopup} from './modal.js';

  import {saveEditProfile} from './modal.js';

  import {saveUserAvatar} from './modal.js';

  import {closePopupAvatar} from './modal.js';



export function renderCard (data, container, userId, handleChangeLikeStatus) {
  const card = createCard(data, userId, handleChangeLikeStatus);
  container.prepend(card);
};







export function deleteCard(evt) {
    const eventTarget = evt.target;

    eventTarget.closest('.card').remove();
};

export function handleProfileFormSubmit (evt) {
    evt.preventDefault();

    saveEditProfile();

    setTimeout(() => closePopupProfile(), 1000);
};

export function handleAvatarFormSubmit (evt) {
  evt.preventDefault();
  saveUserAvatar();

  setTimeout(() => closePopupAvatar(), 1000);
}

export function handleClickCard (name, image) {
    openCardImage.src = image;

    openCardImage.alt = name;

    openCardName.textContent = name;

    openPopup(popupCard);
}
