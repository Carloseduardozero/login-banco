import { Model } from 'mongoose';
import { user } from '../user/entidade/user.entidade';
import { userDto } from '../user/dtos/userDtos';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userModel;
    private readonly userservice;
    private jwtService;
    constructor(userModel: Model<user>, userservice: UserService, jwtService: JwtService);
    validar(userDto: userDto): Promise<user>;
    findOne(email: string): Promise<user | undefined>;
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
