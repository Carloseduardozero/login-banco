import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({

    nome:{type: String},

    email:{type: String},

  password: {type: String},

    
    
}, {timestamps: true, collection:'user'})