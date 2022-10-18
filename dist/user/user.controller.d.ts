import { userDto } from './dtos/userDtos';
import { user } from './entidade/user.entidade';
import { UserListaService } from './user-lista.service';
import { UserService } from './user.service';
export declare class UserController {
    private readonly UserService;
    private readonly UserListaService;
    constructor(UserService: UserService, UserListaService: UserListaService);
    criarUser(userDto: userDto): Promise<user>;
    consultarTodosUsuarios(): Promise<user[]>;
}
