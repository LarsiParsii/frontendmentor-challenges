const card_name = document.querySelector('.card-front__name');
const card_cardnumber = document.querySelector('.card-front__card-number');
const card_exp_month = document.querySelector('.exp__month');
const card_exp_year = document.querySelector('.exp__year');
const card_cvc = document.querySelector('.card-back__cvc');

const field_name = document.getElementById('name');
const field_cardnumber = document.getElementById('cardnum');
const field_exp_month = document.getElementById('exp__month');
const field_exp_year = document.getElementById('exp__year');
const field_cvc = document.getElementById('cvc');

const bullet = "•";
const defaultCardNumber = "0000 0000 0000 0000";
const defaultName = "Jane Appleseed";

card_name.innerText = defaultName;
card_cardnumber.innerText = defaultCardNumber;
card_exp_month.innerText = bullet.repeat(2);
card_exp_year.innerText = bullet.repeat(2);
card_cvc.innerText = bullet.repeat(3);


const toggleError = (elementId, show) => {
  const errorMessage = document.querySelector(`[data-for="${elementId}"]`);
  if (errorMessage) {
    errorMessage.style.display = show ? 'block' : 'none';
  }
};


field_name.addEventListener('input', (e) => {
	// Remove all non-letters
	let value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
	// Trim to 40 letters
	value = value.slice(0, 70);
	e.target.value = value;

	if (e.target.value === '') {
		card_name.innerText = defaultName;
		// Show "Can't be blank" error
	} else {
		card_name.innerText = field_name.value;
	}
});


field_cardnumber.addEventListener('input', (e) => {
	// Remove all non-digits and whitespace
	let value = e.target.value.replace(/\D/g, '');

	// Trim to 16 digits
	value = value.slice(0, 16);

	// Format the digits into four groups of four
	const formattedValue = [];
	for (let i = 0; i < value.length; i += 4) {
		formattedValue.push(value.slice(i, i + 4));
	}

	// Join and set the formatted value back into the input field
	e.target.value = formattedValue.join(' ');

	if (e.target.value === '') {
		card_cardnumber.innerText = defaultCardNumber;
		// Show "Can't be blank" error
	} else {
		card_cardnumber.innerText = field_cardnumber.value;
	}
});


field_exp_month.addEventListener('input', (e) => {
	// Remove all non-digits and whitespace
	let value = e.target.value.replace(/\D/g, '');

	// Trim to 2 digits
	value = value.slice(0, 2);

	// Update field value
	e.target.value = value;

	if (e.target.value === '') {
		card_exp_month.innerText = bullet.repeat(2);
		// Show "Can't be blank" error
	} else {
		card_exp_month.innerText = field_exp_month.value;
	}

	// Validate
	if (value < 1 || value > 12) {
		// Show "Invalid date" error
	}
});


field_exp_year.addEventListener('input', (e) => {
	let value = e.target.value.replace(/\D/g, '');

	value = value.slice(0, 2);

	e.target.value = value;

	if (e.target.value === '') {
		card_exp_year.innerText = bullet.repeat(2);
		// Show "Can't be blank" error
	} else {
		card_exp_year.innerText = field_exp_year.value;
	}

	// Validate
	if (value < 1 || value > 12) {
		// Show "Invalid date" error
	}
});


field_cvc.addEventListener('input', (e) => {
	let value = e.target.value.replace(/\D/g, '');

	value = value.slice(0, 3);

	e.target.value = value;

	if (e.target.value === '') {
		card_cvc.innerText = bullet.repeat(3);
		// Show "Can't be blank" error
	} else {
		card_cvc.innerText = field_cvc.value;
	}
});