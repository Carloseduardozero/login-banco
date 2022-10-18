import { Model } from 'mongoose';
import { user } from './entidade/user.entidade';
export declare class UserListaService {
    private readonly userModel;
    constructor(userModel: Model<user>);
    consultarTodosUsuarios(): Promise<user[]>;
}
