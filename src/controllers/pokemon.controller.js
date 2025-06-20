import { PokemonService } from '../services/pokemon.service.js';

export const PokemonController = {
  async findPag(req, res) {
    const pokemon = await PokemonService.findPag(req.body);
    res.status(201).json(pokemon);
  },
  async create(req, res) {
    const created = await PokemonService.create(req.body);
    res.status(201).json(created);
  },

  async list(_req, res) {
    res.json(await PokemonService.findAll());
  },

  async get(req, res) {
    const pokemon = await PokemonService.findById(req.params.id);
    if (!pokemon) return res.status(404).json({ message: 'Not found' });
    res.json(pokemon);
  },

  async update(req, res) {
    const updated = await PokemonService.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json(updated);
  },

  async remove(req, res) {
    const removed = await PokemonService.remove(req.params.id);
    if (!removed) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  },
};
