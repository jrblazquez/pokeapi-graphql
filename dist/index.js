"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const graphqlHTTP = require("express-graphql");
const graphql_1 = require("graphql");
const app = express();
const schema = graphql_1.buildSchema(`
  type Query {
    hello: String
  }
`);
const root = { hello: () => 'Hello world!' };
app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000, () => console.log('Iniciado'));
