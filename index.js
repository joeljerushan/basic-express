const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 23 },
];

app.get('/', (req, res) => {
  res.send('Welcome to my Express app');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).send('User not found');
  }
  res.json(user);
});

app.post('/users', (req, res) => {
  const { name, age, dob, city } = req.body;

  if (!name || !age) {
    return res.status(400).send('Name and age are required');
  }

  const newUser = {
    id: users.length + 1,
    name,
    age,
    dob,
    city,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, age, dob, city } = req.body;

  const userIndex = users.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return res.status(404).send('User not found');
  }

  users[userIndex] = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    age: age || users[userIndex].age,
    dob: dob || users[userIndex].dob,
    city: city || users[userIndex].city,
  };

  res.json(users[userIndex]);
});

app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return res.status(404).send('User not found');
  }

  users = users.filter((user) => user.id !== id);
  res.send('User deleted successfully');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
