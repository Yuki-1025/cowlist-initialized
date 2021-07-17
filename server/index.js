const express = require('express')
const app = express()
const port = 3000
//const bodyParser = require('body-parser');
const { create, getAll, updateOne, deleteOne } = require('../database');

app.use(express.static('./client/dist'))
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

// app.post('/api/cows', (req, res) => {
//   create(req.body, (err, result) => {
//     if (err) {
//       res.sendStatus(404);
//     }
//     res.status(201).json(result);
//   });
// });
app.post('/api/cows', (req, res) => {
  create(req.body)
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
});

// app.get('/api/cows', (req, res) => {
//   getAll((err, result) => {
//     if (err) {
//       res.sendStatus(404);
//     }
//     res.status(200).json(result);
//   })
// });
app.get('/api/cows', (req, res) => {
  getAll()
    .then((result)=> {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(404);
    });
});

app.put('/api/cows/:id', (req, res) => {
  console.log('THIS IS REQ.PARAMs ', req.params);
  updateOne(req.params, req.body, (err, result) => {
    if (err) {
      res.sendStatus(404);
    }
    res.status(204).json(result);
  })
});

app.delete('/api/cows/:id', (req, res) => {
  deleteOne(req.params, (err, result) => {
    if (err) {
      res.sendStatus(404);
    }
    res.status(204).json(result);
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))