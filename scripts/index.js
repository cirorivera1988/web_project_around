document.addEventListener("DOMContentLoaded", function () {
  const editButton = document.getElementById("editProfileButton");
  const popupForm = document.querySelector(".popup");
  const closeButton = document.getElementById("popupClose");
  const overlay = document.getElementById("overlay");
  const saveButton = document.querySelector(".form__button");
  const nameInput = document.getElementById("input-name");
  const descInput = document.getElementById("input-description");
  const profileName = document.querySelector(".profile__info-name");
  const profileDesc = document.querySelector(".profile__info-occupation");
  let likeButtons = document.querySelectorAll(
    ".element__card-description-name-like"
  );

  if (editButton && popupForm && closeButton && overlay) {
    editButton.addEventListener("click", function () {
      popupForm.classList.add("active");
      overlay.classList.add("active");
    });

    closeButton.addEventListener("click", function () {
      popupForm.classList.remove("active");
      overlay.classList.remove("active");
    });

    overlay.addEventListener("click", function () {
      popupForm.classList.remove("active");
      overlay.classList.remove("active");
    });
  }

  if (saveButton) {
    saveButton.addEventListener("click", function (event) {
      event.preventDefault();

      if (nameInput && descInput && profileName && profileDesc) {
        profileName.textContent = nameInput.value.trim() || "Jacques Cousteau";
        profileDesc.textContent = descInput.value.trim() || "Explorador";

        popupForm.classList.remove("active");
        overlay.classList.remove("active");
      }
    });
  }

  if (likeButtons.length > 0) {
    likeButtons.forEach((likeButton) => {
      likeButton.addEventListener("click", function () {
        const currentSrc = likeButton.getAttribute("src");

        if (currentSrc.includes("ico_heart.png")) {
          likeButton.setAttribute("src", "images/Union.png");
        } else {
          likeButton.setAttribute("src", "images/ico_heart.png");
        }
      });
    });
  }
});
