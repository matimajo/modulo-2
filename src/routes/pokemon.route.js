import { Router } from 'express';
import { PokemonController } from '../controllers/pokemon.controller.js';
import { authverify } from '../middleware/auth.middleware.js';

export const pokemonRouter = Router();

// pokemonRouter.post('/limit=&offset=0', PokemonController.findPag)
pokemonRouter.get('/', async (req, res) => {
    const limit = parseInt(req.query.limit) || 10;
    const skip = parseInt(req.query.skip) || 0;
    const pokemons = await PokemonController.findPag(limit,skip);
    res.json(pokemons);
});
pokemonRouter.post('/', PokemonController.create)
pokemonRouter.get('/:id', PokemonController.get)
pokemonRouter.put('/:id', PokemonController.update)
pokemonRouter.delete('/:id', PokemonController.remove);
pokemonRouter.use(authverify)
pokemonRouter.get('/', PokemonController.list)