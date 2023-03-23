// POPUP FUNCTIONAL;

const popupEditProfileOpen = document.querySelector(".profile__edit-button");
const popupEdit = document.querySelector(".popup_user_info");

const popupCloseBtn = document.querySelectorAll(".popup__close-button");

const popupImageOpen = document.querySelector(".profile__add-button");
const popupImage = document.querySelector(".popup_type_cards");

const popupTitle = document.querySelector(".profile__title");
const popupSubtitle = document.querySelector(".profile__subtitle");
const popupName = document.querySelector("#name-input");
const popupAbout = document.querySelector("#about-input");

const popupInputInfo = document.querySelector(".popup_user_info");

popupInputInfo.addEventListener("submit", (e) => {
  e.preventDefault();
  popupTitle.innerText = popupName.value;
  popupSubtitle.innerText = popupAbout.value;
  closePopup(popupEdit);
});

function popupValue() {
  popupName.value = popupTitle.innerText;
  popupAbout.value = popupSubtitle.innerText;
}

function popupOpen(popup) {
  popup.classList.add("popup_opened");
  document.body.style.overflow = "hidden";
  popupValue();
}

function windowPopupClose(popup) {
  window.addEventListener("mousedown", (e) => {
    if (e.target == popup) {
      e.target.classList.remove("popup_opened");
      document.body.style.overflow = "";
    }
  });
}

function closePopup(popup) {
  if (popup.classList.contains("popup_opened")) {
    popup.classList.remove("popup_opened");
    document.body.style.overflow = "";
  }
}

popupCloseBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    const parentPopup = e.target.parentElement.parentElement.parentElement;
    closePopup(parentPopup);
  });
});

popupEditProfileOpen.addEventListener("click", () => {
  popupOpen(popupEdit);
  windowPopupClose(popupEdit);
});

popupImageOpen.addEventListener("click", () => {
  popupOpen(popupImage);
  windowPopupClose(popupImage);
});

//CARDS
const popupInputCard = document.querySelector(".popup_type_cards");
const cardTitle = document.querySelector(".card__title");
const cardImage = document.querySelector(".card__item img");
const cardTitleInput = document.querySelector("#place-input");
const urlCardInput = document.querySelector("#url-input");
const cardParent = document.querySelector(".cards__list");

const initialCards = [
  {
    name: "Тула",
    link: "https://sun9-50.userapi.com/owLM-_aDNKSjaHUynngmZMTTb4acPTfCnfuXdw/433857lYcT0.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function createNewCard(item) {
  const card = document.createElement("li");
  card.innerHTML = `
<li class="card__item">
<img
class="card__image"
src="${item.link}"
alt="${item.name}"
/>
<div class="card__description">
<h2 class="card__title">${item.name}</h2>
<button class="card__like-button" type="button">
<img src="img/like.svg" alt="like" />
</button>
</div>
</li>
`;

  return card;
}

function renderNewCard(item) {
  item.forEach((items) => {
    cardParent.append(createNewCard(items));
  });
}

renderNewCard(initialCards);

//---------------------------------------------------------------
popupInputCard.addEventListener("submit", (e) => {
  e.preventDefault();

  const card = document.createElement("li");
  card.classList.add("card__item");
  card.innerHTML = `
                <img
                  class="card__image"
                  src="${urlCardInput.value}"
                  alt="photo"
                />
                <div class="card__description">
                  <h2 class="card__title">${cardTitleInput.value}</h2>
                  <button class="card__like-button" type="button">
                    <img src="img/like.svg" alt="like" />
                  </button>
                </div>
              `;
  cardParent.prepend(card);

  closePopup(popupInputCard);
});
