import express from 'express';
import routes from './routes/images/images';

const app = express();
const port = 3000;

app.use('/api', routes);

app.get('*', function (req, res) {
  res.send('Not a valid route');
});

app.listen(port, () => console.log(`Listening on port ${port}...`));

export default app;
