//данные профиля

const profileEditButton = document.querySelector('.profile__edit-button');

const popupProfile = document.querySelector('#popup-profile');

const profileCloseEdit = document.querySelector('#close-profile-popup');

const popupProfileName = document.querySelector('#profile-name-input');

const popupProfileJob = document.querySelector('#profile-job-input');

const profileName = document.querySelector('.profile__name');

const profileJob = document.querySelector('.profile__job');

const popupCloseCards = document.querySelector('#close-cards-popup');

const formElement = document.querySelector('#popup-edit-form')

//переменные используемые для добавления карточки и открытия попапа карточки

const popupCards = document.querySelector('#popup-cards');

const cardsAddButton = document.querySelector('.profile__add-button');

const cardTemplate = document.querySelector('#card-template').content;

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


const inputCardName = document.querySelector('#cards-name-input');

const inputCardImage = document.querySelector('#cards-link-input');
  
const cardFormSubmit = document.querySelector('#popup-add-form');

const openCardImage = document.querySelector('.popup__open-card-image');

const openCardName = document.querySelector('.popup__open-card-title');

const popupCard = document.querySelector('#open-card');

const cardsFormCloseButton = document.querySelector('#close-card-popup');

const cardsInputName = document.querySelector('#cards-name-input');

const cardsInputLink = document.querySelector('#cards-link-input');

// функции для открытия и закрытия попапов
function openPopup (item) {
    item.classList.add('popup_opened');
};
function closePopup (item) {
    item.classList.remove('popup_opened')
};

function openPopupProfile () {
    openPopup(popupProfile);
    popupProfileName.value = profileName.textContent;
    popupProfileJob.value = profileJob.textContent;
};

function closePopupProfile () {
    closePopup(popupProfile);
};

function openPopupCards () {
    cardsInputName.value = '';
    cardsInputLink.value = '';
    openPopup(popupCards);
};


function closePopupCards () {
    closePopup(popupCards)
};

function closePopupCard() {
    closePopup(popupCard);
};

//функции для карточек
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

function addCard(evt) {
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

function formSubmitHandler (evt) {
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

//обработчики открывания и закрывания попапов
profileEditButton.addEventListener('click', openPopupProfile);
profileCloseEdit.addEventListener('click', closePopupProfile)
cardsAddButton.addEventListener ('click', openPopupCards);
popupCloseCards.addEventListener ('click', closePopupCards);
cardsFormCloseButton.addEventListener('click', closePopupCard)


//обработчики карточек
formElement.addEventListener('submit', formSubmitHandler); 
cardsAddButton.addEventListener ('click', openPopupCards);
cardFormSubmit.addEventListener('submit', addCard); 


