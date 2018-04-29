"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const request = require("request");
const pokemon_1 = require("./models/pokemon");
mongoose.connect('mongodb://localhost:27017/pokemon');
const Pokemon = mongoose.model('Pokemon', pokemon_1.default);
/*request('https://pokeapi.co/api/v2/pokemon/1/', (error, response, body) => {
  const { id, ...rest } = JSON.parse(body);
  const pokemon = new Pokemon({
    number: id,
    ...rest,
  });
  
  pokemon.save((err, jar) => {
    if (err) {
      return console.error(err);
    }
    console.log(jar)
  });
})*/
const PORT = 4000;
const app = express();
app.get('/search/:id', (req, res) => {
    const { id } = req.params;
    request(`https://pokeapi.co/api/v2/pokemon/${id}/`, (error, response, body) => {
        const _a = JSON.parse(body), { id } = _a, rest = __rest(_a, ["id"]);
        const pokemon = new Pokemon(Object.assign({ number: id }, rest));
        pokemon.save((err, savedPokemon) => {
            if (err) {
                return console.error(err);
            }
            res.send(savedPokemon);
        });
    });
});
app.listen(PORT, () => console.log('Iniciado'));
//
/*const schema = buildSchema(`
  type Pokemon {
    id: ID,
    name: String,
  }
  type Query {
    pokemon: Pokemon
  }
`);

const root = {
  pokemon: () => ({
    id: 1,
    name: 'bulbasaur',
  }),
};

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));*/
//
