const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/form', (req, res) => {
	res.send(`
    <h2>Sample Form</h2>
    <form onsubmit="submitForm(event)">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
      <br />
      <label for="email">Email:</label>
      <input style="margin: 15px 0px" type="email" id="email" name="email" placeholder="name@domain" required /><br />
      <label for="payment-type">Payment Type:</label>
      <br />
      <input type="radio" id="cash" name="payment-type" value="cash" />
      <label for="cash">Cash</label>
      <br />
      <input type="radio" id="credit-card" name="payment-type" value="credit-card" />
      <label for="credit-card">Credit Card</label>
      <br />
      <input type="radio" id="googlepay" name="payment-type" value="googlepay" />
      <label for="debit-card">Google Pay</label>
      <br />
      <input type="radio" id="applepay" name="payment-type" value="applepay" />
      <label for="paypal">Apple Pay</label><br />
      <input style="margin: 15px 0px" type="checkbox" id="promotion" name="promotion" value="on" />
      <label for="promotion">Sign me up to special promotions</label>
      <br />
      <label for="location">Preferred Locations:</label>
      <select style="margin-bottom: 15px" id="location" name="location">
        <option value="la">Los Angeles</option>
        <option value="oc">Orange County</option>
        <option value="rs">Riverside</option>
        <option value="sd">San Diego</option>
      </select>
      <br />
      <button type="submit">Submit</button>
      <button type="reset">Cancel</button>
    </form>
  `);
});

app.post('/api/form', (req, res) => {
	const { name, email, paymentType, promotion, location } = req.body;

	res.send(`
    <div>
      <p>${name}, Thank you for your order. We will keep you posted on delivery status at ${email}.</p>
    </div>
  `);
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
