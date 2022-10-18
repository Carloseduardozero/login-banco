import {IsNotEmpty,IsEmail} from 'class-validator';
import { Hash } from 'crypto';

export class userDto{

    @IsNotEmpty()
    nome:string;

    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    password: string; // a senha vai virar uma hash no banco

}