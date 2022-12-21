const Router = require('./src/framework/Router');
const Application = require('./src/framework/Application');

const PORT = process.env.PORT || 9000;
const app = new Application();
const router = new Router();

router.get('/users', (req, res) => {
  res.end('YOU SEND REQUEST TO /USERS')
})

router.get('/posts', (req, res) => {
  res.end('YOU SEND REQUEST TO /POSTS')
})

app.addRouter(router);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
