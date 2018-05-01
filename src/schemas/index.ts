import { buildSchema } from 'graphql';
import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql/type';
import PokemonSchema from '../models/pokemon';

const PokemonType = new GraphQLObjectType({
  name: 'pokemon',
  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    number: {
      type: GraphQLInt,
    },
    name: {
      type: GraphQLString,
    },
    height: {
      type: GraphQLInt,
    },
    weight: {
      type: GraphQLInt,
    }
  })
});

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      pokemon: {
        type: new GraphQLList(PokemonType),
        resolve: () => PokemonSchema
          .find({}, (err, pokemon) => pokemon)
          .limit(3)
          .skip(0)
          .sort({number: 'desc'})
      }
    }
  })
})

export default schema