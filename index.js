const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/index.html`);
});

app.get('/api/form', (req, res) => {
	res.sendFile(`${__dirname}/views/ex1.html`);
});

app.post('/api/form', (req, res) => {
	const name = req.body.name;
	const email = req.body.email;

	res.send(`
    <div>
      <p>${name}, Thank you for your order. We will keep you posted on delivery status at ${email}.</p>
    </div>
  `);
});

app.get('/api/countries', (req, res) => {
	res.sendFile(`${__dirname}/views/ex2.html`);
});

app.post('/api/countries', (req, res) => {
	const { name, countries } = req.body;

	if (!name || !Array.isArray(countries)) {
		return res.status(400).json({ error: 'Invalid input data' });
	}

	const numberOfCountriesVisited = countries.length;

	res.send(`
    <div>
      <p>Your name is ${name} and you visited ${numberOfCountriesVisited} countries. Keep traveling!</p>
    </div>
  `);
});

app.get('/api/articles', (req, res) => {
	res.sendFile(`${__dirname}/views/ex3.html`);
});

app.post('/api/articles', (req, res) => {
	const { title, content } = req.body;

	if (!title || !content) {
		return res.status(400).json({ error: 'Invalid input data' });
	}

	const id = articles.length == 0 ? 1 : Math.max(...articles.map((article) => article.id)) + 1;

	articles.push({ id, title, content });

	res.send(`
    <p>New articles added successfully with title "${title}" and ID ${id}!</p>
  `);
});

const articles = [];

const PORT = 3333;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
