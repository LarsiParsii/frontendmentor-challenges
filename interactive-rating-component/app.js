const ratingCard = document.querySelector(".rating");
const thankyouCard = document.querySelector(".thankyou");
const submitButton = document.querySelector(".rating__submit-button");
const ratingButtons = document.querySelectorAll(".rating__score");
const thankyouRating = document.getElementById("thankyou__rating");

let selectedButton;

ratingButtons.forEach((button) => {
	button.addEventListener('click', (event) => {
		thankyouRating.innerText = button.innerText;
		if (selectedButton) selectedButton.classList.remove("selected");
		if (button === selectedButton) {
			selectedButton = undefined;
		} else {
			selectedButton = button;
			selectedButton.classList.add("selected");
		}
	})
})

submitButton.addEventListener('click', (event) => {
	if (selectedButton) {
		ratingCard.classList.toggle("hidden")
		thankyouCard.classList.toggle("hidden")
	}
})