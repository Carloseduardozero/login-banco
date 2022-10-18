import { Controller,Post, Body, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { userDto } from './dtos/userDtos';
import { user } from './entidade/user.entidade';
import { UserListaService } from './user-lista.service';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor (private readonly UserService:UserService,
                 private readonly UserListaService:UserListaService){}

@Post()
async criarUser ( @Body() userDto: userDto):Promise< user>{

    return this.UserService.criarUser(userDto)
}

@UseGuards(JwtAuthGuard)
@Get('todosUsuario')
async consultarTodosUsuarios():Promise<user[]>{

    return await this.UserListaService.consultarTodosUsuarios()
}
}


