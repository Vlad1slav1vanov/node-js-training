const Application = require('./framework/Application');
const PORT = process.env.PORT || 9000;
const jsonParser = require('./framework/parseJson');
const urlParser = require('./framework/parseUrl');
const app = new Application();
const userRouter = require('./src/user-router');


app.use(jsonParser);
app.use(urlParser('http://localhost:9000'));
app.addRouter(userRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
