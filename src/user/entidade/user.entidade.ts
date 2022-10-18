import { Document, hh } from 'mongoose';
import { Hash, } from 'crypto';

export interface user extends Document{

    nome:string;

    email:string;

    password: string;

}



