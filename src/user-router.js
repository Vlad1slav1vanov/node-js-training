const { query } = require('express');
const Router = require('../framework/Router');

const router = new Router();

const users = [
  {id: 1, name: 'Vladislav'},
  {id: 2, name: 'Ksenia'}
]

router.get('/users', (req, res) =>{
  if (req.params.id) {
    return res.send(users.find(user => user.id == req.params.id));
  }
  res.send(users);
})

router.post('/users', (req, res) =>{
  const user = req.body;
  users.push(user)
  res.send(users);
})

module.exports = router;