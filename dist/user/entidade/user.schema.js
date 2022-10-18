"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose = require("mongoose");
exports.userSchema = new mongoose.Schema({
    nome: { type: String },
    email: { type: String },
    password: { type: String },
}, { timestamps: true, collection: 'user' });
//# sourceMappingURL=user.schema.js.map