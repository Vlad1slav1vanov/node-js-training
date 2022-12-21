const Application = require('./framework/Application');
const PORT = process.env.PORT || 9000;
const app = new Application();
const userRouter = require('./src/user-router')

app.addRouter(userRouter);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
