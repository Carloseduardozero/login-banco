import { Controller,Post,Body,Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { userDto } from '../user/dtos/userDtos';
import { user } from '../user/entidade/user.entidade';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private AutheService: AuthService){}
 
    
    @UseGuards(AuthGuard('local'))
    @Post('login')
   async login(@Request() req) {
    
   return req.user;

}

@UseGuards(AuthGuard('local'))
    @Post('token')
    async token (@Request() req){

            return this.AutheService.login(req.user)
    }

}
