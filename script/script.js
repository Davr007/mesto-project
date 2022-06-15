const editProfileButton = document.querySelector('.profile__edit-button');

const popupProfile = document.querySelector('#popup-profile');

const closeEditProfile = document.querySelector('#close-profile-popup');

const closeCardsPopup = document.querySelector('#close-cards-popup');

//инпуты формы редактирования профиля

const popupProfileName = document.querySelector('#profile-name-input');

const popupProfileJob = document.querySelector('#profile-job-input');

//Данные профиля

const profileName = document.querySelector('.profile__name');

const profileJob = document.querySelector('.profile__job');
 


function openPopup (item) {
    item.classList.add('popup_opened');
};

function openPopupProfile () {
    openPopup(popupProfile);
    popupProfileName.value = profileName.textContent;
    popupProfileJob.value = profileJob.textContent;
};

editProfileButton.addEventListener('click', openPopupProfile);

function closePopupProfile () {
    closePopup(popupProfile);
}

closeEditProfile.addEventListener('click', closePopupProfile)

function closePopup (item) {
    item.classList.remove('popup_opened')
};
 
function putLike (evt) {
    const eventTarget = evt.target;

    eventTarget.classList.toggle('card__like_active')
 }
 

function deleteCard(evt) {
    const eventTarget = evt.target;

    eventTarget.closest('.card').remove();
}

const formElement = document.querySelector('#popup-edit-form')

function formSubmitHandler (evt) {
    evt.preventDefault();

    const nameProfileValue = popupProfileName.value;

    const jobProfileValue = popupProfileJob.value;

    profileName.textContent = nameProfileValue;

    profileJob.textContent = jobProfileValue;

    closePopupProfile();
}

formElement.addEventListener('submit', formSubmitHandler); 


const popupCards = document.querySelector('#popup-cards');

const addCardsButton = document.querySelector('.profile__add-button');

function openPopupCards () {
    document.querySelector('#cards-name-input').value = '';
    document.querySelector('#cards-link-input').value = '';
    openPopup(popupCards);

}

addCardsButton.addEventListener ('click', openPopupCards);

function closePopupCards () {
    closePopup(popupCards)
}

closeCardsPopup.addEventListener ('click', closePopupCards);


const cardTemplate = document.querySelector('#card-template').content;

console.log(cardTemplate)

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

function createCard (data) {
    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.card__image').src = data.link;
    cardElement.querySelector('.card__name').textContent = data.name;

    cardElement.querySelector('.card__like').addEventListener('click', putLike);

    cardElement.querySelector('.card__delete').addEventListener('click', deleteCard)

    cardElement.querySelector('.card__image').addEventListener('click', () => handleClickCard(data.name, data.link))

    return cardElement
}

function renderCard (data, container) {
    const card = createCard(data);

    container.prepend(card);
}

initialCards.forEach(function(item) {
    renderCard(item, cardsPlace)
})

const inputCardName = document.querySelector('#cards-name-input');

const inputCardImage = document.querySelector('#cards-link-input')

const addFormSubmit = document.querySelector('#popup-add-form')

function addCard(evt) {
    evt.preventDefault();

    const userCard = {};

    userCard.name = inputCardName.value;

    userCard.link = inputCardImage.value;

    closePopupCards();

    renderCard(userCard, cardsPlace);
}

addFormSubmit.addEventListener('submit', addCard); 

const openCardImage = document.querySelector('.popup__open-card-image');

const openCardName = document.querySelector('.popup__open-card-title');

const popupCard = document.querySelector('#open-card')

const closeOpenCardButton = document.querySelector('#close-card-popup')

function handleClickCard (name, image) {
    openCardImage.src = image;

    openCardName.textContent = name;

    openPopup(popupCard);
}

function closePopupCard() {
    closePopup(popupCard);
}

closeOpenCardButton.addEventListener('click', closePopupCard)

