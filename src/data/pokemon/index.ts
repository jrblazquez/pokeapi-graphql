import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';

const PokemonSchema = new Schema({
  id: Schema.Types.ObjectId,
  number: Number,
  name: String,
  height: Number,
  weight: Number,
})

const PokemonModel = mongoose.model('Pokemon', PokemonSchema);

export const getPokemon = ({limit, skip}) => PokemonModel
  .find({}, (err, pokemon) => pokemon)
  .limit(limit)
  .skip(skip)
  .sort({number: 'asc'})
;

export const setPokemon = (args) => {
  console.log(PokemonModel.find({ number: args.number }))
  /*PokemonModel
  .create(args)*/
};