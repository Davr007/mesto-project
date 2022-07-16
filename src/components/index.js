import '../pages/index.css';


import {validationObject} from './validate.js';

const cardsAddButton = document.querySelector('.profile__add-button');

export const formItem = document.querySelector('#popup-edit-form');

const cardsFormCloseButton = document.querySelector('#close-card-popup');

const profileEditButton = document.querySelector('.profile__edit-button');

const profileCloseEdit = document.querySelector('#close-profile-popup');

const popupCloseCards = document.querySelector('#close-cards-popup');

const popupAvatarCloseButton = document.querySelector('#close-avatar-popup')

const cardFormSubmit = document.querySelector('#popup-add-form');

const popupAvatarOpenButton = document.querySelector('.profile__avatar-button');


import {openPopupAvatar, openPopupProfile} from './modal.js';

import {closePopupProfile} from './modal.js';

import {openPopupCards} from './modal.js';

import {closePopupCards} from './modal.js';

import {closePopupCard} from './modal.js';

import {handleProfileFormSubmit} from './card.js';

import {enableValidation} from './validate.js';

import {changeLikeStatus, getAllCards} from './api.js';

import {cardsPlace} from './card.js';

import {renderCard} from './card.js';

import {profileName} from './card.js';

import {profileJob} from './card.js';

import {closePopupAvatar} from './modal.js';

import {handleAvatarFormSubmit} from './card.js';

import {avatarImage} from './modal.js';

import {getAllInfo} from './api.js';

import {postCard} from './api.js';

import {inputCardImage} from './card.js';

import {inputCardName} from './card.js';

import {cardTemplate} from './card.js';

import {handleClickCard} from './card.js';

import {deletingCard} from './api.js';

import {deleteCard} from './card.js';

const avatarForm = document.querySelector('#popup-avatar-form');

import {loadChanges} from './modal.js';

import { popupCard } from './card.js';

export let userId = null;

export function saveCard () {

  loadChanges(cardFormSubmit, 'Сохранение...')

  postCard({name: inputCardName.value, link: inputCardImage.value})

  .then ((data) => {
    renderCard(data, cardsPlace, userId, handleChangeLikeStatus);
    console.log('Карточка добавлена успешно');
  })

  .catch ((err) => {
    console.log(`Ошибка: ${err}`)
  })

  .finally(() => {setTimeout(() => loadChanges(cardFormSubmit, 'Создать'), 2000)})
}



function addCard(evt) {

 evt.preventDefault();

 saveCard ();

 setTimeout(() => {closePopupCards()}, 1000);

};

const checkLike = (likesArray, userId, likeElement) => {
  likesArray.forEach((cardLike) => {
    if(cardLike._id === userId) {
      likeElement.classList.add('card__like_active')
    } else {
      likeElement.classList.remove('card__like_active')
    }
  })
};

const isLiked = (likesArray, userId) => {
  return Boolean(
    likesArray.find((likeObj) => {
      return likeObj._id === userId
    })
  )
};

const likeStatus = (likesArray, userId, cardElement) => {
  if(isLiked(likesArray, userId)) {
    cardElement.querySelector('.card__like').classList.add('card__like_active')
  } else {
    cardElement.querySelector('.card__like').classList.remove('card__like_active')
  }

  cardElement.querySelector('.card__like-quantity').textContent = likesArray.length

};

export const handleChangeLikeStatus = (cardId, isLiked, cardElement) => {
  changeLikeStatus(cardId, isLiked) 

  .then((data) => {
    likeStatus(data.likes, userId, cardElement)
  })

  .catch((err) => {
    console.log(err)
  })
};

export function createCard (data, userId, handleChangeLikeStatus) {
  const cardElement = cardTemplate.cloneNode(true).querySelector('.card');
  const likeButton = cardElement.querySelector('.card__like');
  const cardImage = cardElement.querySelector('.card__image');
  const cardDeleteButton = cardElement.querySelector('.card__delete');
  const likeQuantity = cardElement.querySelector('.card__like-quantity');
  const cardId = data._id;
  const likesArray = data.likes;

  checkLike(likesArray, userId, likeButton);

  likeQuantity.textContent = likesArray.length

  likeButton.addEventListener('click', () => {handleChangeLikeStatus(cardId, likeButton.classList.contains('card__like_active'), cardElement)});


  cardImage.src = data.link;
  cardImage.alt = data.name;

  if (data.owner._id !== userId) {
    cardDeleteButton.remove()
  };

  // cardDeleteButton.addEventListener('click', deletingCard(cardId))

  cardElement.querySelector('.card__name').textContent = data.name;

  cardDeleteButton.addEventListener('click', (evt) => {
    
    if (userId == data.owner._id) {
      deletingCard(cardId);
      deleteCard(evt)
    } else {
      console.log('это не ваша карточка')
    }
  });

  cardImage.addEventListener('click', () => handleClickCard(data.name, data.link))

  return cardElement
};

enableValidation(validationObject)

//обработчики открывания и закрывания попапов
profileEditButton.addEventListener('click', openPopupProfile);
profileCloseEdit.addEventListener('click', closePopupProfile);
cardsAddButton.addEventListener ('click', openPopupCards);
popupCloseCards.addEventListener ('click', closePopupCards);
cardsFormCloseButton.addEventListener('click', closePopupCard);
popupAvatarOpenButton.addEventListener('click', openPopupAvatar);
popupAvatarCloseButton.addEventListener('click', closePopupAvatar)

//обработчик карточек 

formItem.addEventListener('submit', handleProfileFormSubmit); 
cardsAddButton.addEventListener ('click', openPopupCards);
cardFormSubmit.addEventListener('submit', addCard);
avatarForm.addEventListener('submit', handleAvatarFormSubmit);

// загрузка карточек из сервера 

getAllCards()

.then ((data) => {
  renderCard(data, cardsPlace, userId, handleChangeLikeStatus)
  })

.catch ((err) => {
  console.log(`Ошибка: ${err}`)
});


getAllInfo()

.then (([user, cards]) => {
    profileName.textContent = user.name,
    profileJob.textContent = user.about,
    avatarImage.src = user.avatar,
    userId = user._id

    cards.reverse().forEach((data) => {
        renderCard(data, cardsPlace, userId, handleChangeLikeStatus)
    })
})

.catch ((err) => {
  console.log(err)
});
