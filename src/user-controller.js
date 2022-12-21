const users = [
  {id: 1, name: 'Vladislav'},
  {id: 2, name: 'Ksenia'}
]

const getUsers = ('/users', (req, res) =>{
  if (req.params.id) {
    return res.send(users.find(user => user.id == req.params.id));
  }
  res.send(users);
})

const createUser = ('/users', (req, res) =>{
  const user = req.body;
  users.push(user)
  res.send(users);
})

module.exports = {
  getUsers,
  createUser,
}