import { Model } from 'mongoose';
import { userDto } from './dtos/userDtos';
import { user } from './entidade/user.entidade';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<user>);
    criarUser(userDto: userDto): Promise<user>;
}
