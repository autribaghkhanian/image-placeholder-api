import express, { Request, Response } from 'express';
import routes from './controllers/api/images';
import morgan from 'morgan';

const app = express();
const port = 3000;

// Middleware
app.use(morgan('common'));
app.use('/api', routes);

app.get('*', function (req: Request, res: Response): void {
  res.send('Not a valid route');
});

app.listen(port, () => console.log(`Listening on port ${port}...`));

export default app;
