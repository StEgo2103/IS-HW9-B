document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('callapi').addEventListener('click', () => {
		fetch('http://localhost:3333/api/countries', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(traveler),
		}).then((response) => {
			response.text().then((text) => {
				document.getElementById('response').innerHTML = text;
			});
		});
	});
});

const traveler = {
	name: 'Luca',
	countries: [
		{ name: 'France', year: 2003 },
		{ name: 'Spain', year: 2010 },
		{ name: 'Italy', year: 2014 },
		{ name: 'England', year: 2018 },
		{ name: 'USA', year: 2024 },
	],
};
