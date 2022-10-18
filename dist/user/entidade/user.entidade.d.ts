import { Document } from 'mongoose';
export interface user extends Document {
    nome: string;
    email: string;
    password: string;
}
