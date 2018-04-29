"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PokemonSchema = new mongoose_1.Schema({
    id: mongoose_1.Schema.Types.ObjectId,
    number: Number,
    name: String,
    height: Number,
    weight: Number,
});
exports.default = PokemonSchema;
