import { Schema } from 'mongoose';
import * as mongoose from 'mongoose';

const PokemonSchema = new Schema({
  id: Schema.Types.ObjectId,
  number: Number,
  name: String,
  height: Number,
  weight: Number,
})

export default mongoose.model('Pokemon', PokemonSchema);