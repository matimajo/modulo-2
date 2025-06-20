import express from 'express';
import { pokemonRouter } from './routes/pokemon.route.js';
import { authRouter } from './routes/auth.routes.js';

export function createApp() {
  const app = express();

  app.use(express.json());
  app.use('/api/auth', authRouter);
  app.use('/api/pokemon', pokemonRouter);

  // 404
  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });
  return app;
}