import express from 'express';
import AuthController from './auth/auth';
const app: express.Express = express();
const port = 3001;

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World!');
});

app.get('/test', (req, res) => {
    res.send('Hello World! test');
});

AuthController(app);

app.listen(port, () => {
    console.log(`Local Mock Server listening on port ${port}`);
});
