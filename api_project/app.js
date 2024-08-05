const app = require('express')();

const host = '127.0.0.1';
const port = 7000;

app.get('/home', (req, res) => {
  res.status(200).type('text/plain');
  res.send('Home page');
});

app.get('/users', (req, res) => {
  res.json([
    {
      name: 'Test',
      age: 30,
    },
    {
      name: 'Lisi',
      age: 25,
    },
  ]);
});

app.use((req, res, next) => {
  res.status(404).type('text/plain');
  res.send('Not found');
});

app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`);
});
