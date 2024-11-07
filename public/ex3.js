function submitForm(event) {
	event.preventDefault();
	const form = event.target;

	const body = {
		title: form.elements['title'].value,
		content: form.elements['content'].value,
	};

	fetch('http://localhost:3333/api/articles', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	})
		.then((response) => response.text())
		.then((text) => {
			document.getElementById('response').innerHTML += text;
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}
