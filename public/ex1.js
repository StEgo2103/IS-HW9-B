document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault();
	const form = event.target;
	const formData = JSON.stringify({
		name: form.name.value,
		email: form.email.value,
	});

	fetch('/api/form', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: formData,
	})
		.then((response) => response.text())
		.then((text) => {
			document.getElementById('response').innerHTML = text;
		})
		.catch((error) => {
			console.error('Error:', error);
		});
});
