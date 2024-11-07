document.addEventListener('DOMContentLoaded', () => {
	fetch('http://localhost:3333/api/form', {
		method: 'GET',
		headers: {
			'Content-Type': 'text/html',
		},
	}).then((response) => {
		response.text().then((text) => {
			document.getElementById('form').innerHTML = text;
		});
	});
});

function submitForm(event) {
	event.preventDefault();
	const form = event.target;

	const body = {
		name: form.elements['name'].value,
		email: form.elements['email'].value,
		paymentType: form.elements['payment-type'].value,
		promotion: form.elements['promotion'].checked ? 'on' : 'off',
		location: form.elements['location'].value,
	};

	fetch('http://localhost:3333/api/form', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	})
		.then((response) => response.text())
		.then((text) => {
			document.getElementById('response').innerHTML = text;
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}
