const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const people = [
    { name: 'John', age: 30, id: 1 },
    { name: 'Jane', age: 25, id: 2 },
    { name: 'Jim', age: 40, id: 3 },
];

app.get('/', (req, res) => {
    res.send('API is running');
});

app.get('/people', (req, res) => {
    console.log('hit')
    res.json(people);
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});

