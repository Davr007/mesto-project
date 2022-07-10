const openCardImage = document.querySelector('.popup__open-card-image');

const openCardName = document.querySelector('.popup__open-card-title');

const cardTemplate = document.querySelector('#card-template').content;

const inputCardName = document.querySelector('#cards-name-input');

const inputCardImage = document.querySelector('#cards-link-input');

export const profileName = document.querySelector('.profile__name');

export const profileJob = document.querySelector('.profile__job');

export const popupCard = document.querySelector('#open-card');

export const popupProfileName = document.querySelector('#profile-name-input');

export const popupProfileJob = document.querySelector('#profile-job-input');

const cardsPlace = document.querySelector('.cards');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  import {closePopupProfile} from './modal.js';

  import {closePopupCards} from './modal.js';

  import {openPopup} from './modal.js';

  

//функция создания карточки
function createCard (data) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.card__image');

    cardImage.src = data.link;
    cardImage.alt = data.name
    cardElement.querySelector('.card__name').textContent = data.name;

    cardElement.querySelector('.card__like').addEventListener('click', putLike);

    cardElement.querySelector('.card__delete').addEventListener('click', deleteCard)

    cardImage.addEventListener('click', () => handleClickCard(data.name, data.link))

    return cardElement
};

function renderCard (data, container) {
    const card = createCard(data);

    container.prepend(card);
}
;
initialCards.forEach(function(item) {
    renderCard(item, cardsPlace)
});

export function addCard(evt) {
    evt.preventDefault();

    const userCard = {};

    userCard.name = inputCardName.value;

    userCard.link = inputCardImage.value;

    closePopupCards();

    renderCard(userCard, cardsPlace);
};

function putLike (evt) {
    const eventTarget = evt.target;

    eventTarget.classList.toggle('card__like_active')
 };
 

function deleteCard(evt) {
    const eventTarget = evt.target;

    eventTarget.closest('.card').remove();
};

export function handleProfileFormSubmit (evt) {
    evt.preventDefault();

    const nameProfileValue = popupProfileName.value;

    const jobProfileValue = popupProfileJob.value;

    profileName.textContent = nameProfileValue;

    profileJob.textContent = jobProfileValue;

    closePopupProfile();
};

function handleClickCard (name, image) {
    openCardImage.src = image;

    openCardImage.alt = name;

    openCardName.textContent = name;

    openPopup(popupCard);
}
