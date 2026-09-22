// Project filter: shows or hides the cards depending on their category.
function setupProjectFilter() {
  const buttons = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-category]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;

      // Mark only the clicked button as pressed
      buttons.forEach((other) => {
        if (other === button) {
          other.setAttribute("aria-pressed", "true");
        } else {
          other.setAttribute("aria-pressed", "false");
        }
      });

      // Show the cards of the selected category and hide the rest
      cards.forEach((card) => {
        const categories = card.dataset.category.split(" ");

        if (selected === "all" || categories.includes(selected)) {
          card.classList.remove("is-hidden");
        } else {
          card.classList.add("is-hidden");
        }
      });
    });
  });
}

// Lightbox: opens a project image in a larger dialog.
function setupLightbox() {
  const dialog = document.getElementById("lightbox");
  const dialogImage = document.getElementById("lightbox-image");
  const closeButton = document.getElementById("lightbox-close");

  if (!dialog || !dialogImage || !closeButton) {
    return;
  }

  document.querySelectorAll("[data-lightbox]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const smallImage = trigger.querySelector("img");

      dialogImage.src = trigger.dataset.lightbox;
      dialogImage.alt = smallImage.alt;
      dialog.showModal();
    });
  });

  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  // A click on the dark area outside the image closes the dialog
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupProjectFilter();
  setupLightbox();
});
