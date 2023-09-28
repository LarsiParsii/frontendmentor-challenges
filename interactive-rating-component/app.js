const ratingCard = document.querySelector(".rating");
const thankyouCard = document.querySelector(".thankyou");
const submitButton = document.querySelector(".rating__submit-button");
const ratingButtons = document.querySelectorAll(".rating__score");
const thankyouRating = document.getElementById("thankyou__rating");
const c1 = ratingCard.classList;
const c2 = thankyouCard.classList;

ratingButtons.forEach((button) => {
	button.addEventListener('click', (event) => {
		thankyouRating.innerText = button.innerText;
	})
})

submitButton.addEventListener('click', (event) => {
	thankyouRating.innerText = button.innerText;
	ratingCard.classList.toggle("hidden")
	thankyouCard.classList.toggle("hidden")
	console.log(`ratingCard: ${c1}`);
	console.log(`thankyouCard: ${c2}`);
})