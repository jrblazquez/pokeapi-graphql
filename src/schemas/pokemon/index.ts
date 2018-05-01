import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean
} from 'graphql/type';
import { getPokemon, setPokemon } from '../../data/pokemon';

export const PokemonType = new GraphQLObjectType({
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

export const PokemonQueryField = {
  type: new GraphQLList(PokemonType),
  args: {
    number: { 
      type: GraphQLInt,
    },
    limit: { 
      type: GraphQLInt,
    },
    skip: { 
      type: GraphQLInt,
    }
  },
  resolve: (_, {number, limit, skip}) => getPokemon({limit, skip})
};

export const PokemonMutationField = {
  type: PokemonType,
  args: {
    number: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    height: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    weight: {
      type: new GraphQLNonNull(GraphQLInt),
    }
  },
  resolve: (_, args) => setPokemon(args)
}