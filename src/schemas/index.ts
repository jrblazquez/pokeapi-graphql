import { buildSchema } from 'graphql';
import {
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql/type';
import { PokemonQueryField, PokemonMutationField } from './pokemon';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      pokemon: PokemonQueryField,
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      createPokemon: PokemonMutationField,
    }
  })
})

export default schema