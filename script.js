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


// лайк
 

//открытие попапа
function openPopup (item) {
    item.classList.add('popup_opened');
};

function openPopupProfile () {
    openPopup(popupProfile);
    popupProfileName.value = profileName.textContent;
    popupProfileJob.value = profileJob.textContent;
};

editProfileButton.addEventListener('click', openPopupProfile);
//закрытие попапа профиля 

function closePopupProfile () {
    closePopup(popupProfile);
}

closeEditProfile.addEventListener('click', closePopupProfile)

//закрытие попапа
function closePopup (item) {
    item.classList.remove('popup_opened')
};


//лайк 
// function putLike (evt) {
//     const eventTarget = evt.target;

//     eventTarget.classList.toggle('card__like_active')
// }

//  likeButton.addEventListener('click', putLike);

//возможность сохранения изменений в редактировании профиля
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

//открытие формы добавления карточки 

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


// темплейт 

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

    return cardElement
}

initialCards.forEach(function(item) {
    const card = createCard(item);

    cardsPlace.prepend(card);
})




