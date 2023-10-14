const card_name = document.querySelector('.card-front__name');
const card_cardnumber = document.querySelector('.card-front__card-number');
const card_exp_month = document.querySelector('.exp__month');
const card_exp_year = document.querySelector('.exp__year');
const card_cvc = document.querySelector('.card-back__cvc');

const field_name = document.querySelector('#name');
const field_cardnumber = document.querySelector('#cardnum');
const field_exp_month = document.querySelector('#exp__month');
const field_exp_year = document.querySelector('#exp__year');
const field_cvc = document.querySelector('#cvc');

let prev_cardnumber = field_cardnumber.value;

field_name.addEventListener('input', () => {
	card_name.innerText = field_name.value;
});

field_cardnumber.addEventListener('input', () => {
	card_cardnumber.innerText = field_cardnumber.value;
	formatCardNumber();
});

field_exp_month.addEventListener('input', () => {
	card_exp_month.innerText = field_exp_month.value;
});

field_exp_year.addEventListener('input', () => {
	card_exp_year.innerText = field_exp_year.value;
});

field_cvc.addEventListener('input', () => {
	card_cvc.innerText = field_cvc.value;
});

const formatCardNumber = () => {
	if (field_cardnumber.value.length > 16) {
		field_cardnumber.value = prev_cardnumber;
		return;
	}
	
	if (field_cardnumber.value.length == 4) {
		field_cardnumber.value += " ";
	}
	if (field_cardnumber.value.length == 9) {
		field_cardnumber.value += " ";
	}
	if (field_cardnumber.value.length == 14) {
		field_cardnumber.value += " ";
	}
	
	prev_cardnumber = field_cardnumber.value;
}