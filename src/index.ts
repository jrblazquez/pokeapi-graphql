import * as express from 'express';
import * as mongoose from 'mongoose';
import PokemonSchema from './models/pokemon';
import * as graphqlHTTP from 'express-graphql';
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

const SERVER_PORT = 4000;
const DB_HOST = 'localhost';
const DB_PORT = '27017';
const DB_NAME = 'pokemon';

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`)
  .then(() => {
    console.log('OK conectar base de datos')
  }, err => {
    console.log('error al conectar ->', err)
  });

const app = express();

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
          .limit(20)
          .skip(0)
          .sort({number: 'asc'})
      }
    }
  })
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(SERVER_PORT, () => 
  console.log('Iniciado servidor')
);
