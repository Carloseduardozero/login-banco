import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user } from './entidade/user.entidade';

@Injectable()
export class UserListaService {

    constructor(
        @InjectModel('user') private readonly userModel: Model<user>
    ){}

    async consultarTodosUsuarios():Promise<user[]>{

        return await this.userModel.find().exec()
    }
}
