import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user } from '../user/entidade/user.entidade';
import * as bcrypt from 'bcrypt'
import { userDto } from '../user/dtos/userDtos';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {


    constructor (
    @InjectModel('user') private readonly userModel: Model<user>, 
    private readonly  userservice: UserService,
    private jwtService: JwtService){}

   

    

async validar(userDto:userDto):Promise<user>{

        let {
            email
           
    
        } = userDto
    
    
    
     const user  = await this.userModel.findOne({email});
     
     
    
     console.log( user)
    
     if(!user){
    
        throw new BadRequestException(` ERRO  `)
    
    }else if (user) {
    
      //  throw new BadRequestException(` Jogador com e-mail ${email} `)
     
        
    }
    
    
        return user

}

async findOne(email: string): Promise<user | undefined> {
    return this.userModel.findOne({email:email}); // user => user.email === email
  }


  async validateUser(email: string, password: string): Promise<any> {

    const user = await this.findOne(email);

    if (user &&  bcrypt.compareSync(password,user.password)) {

      const { password, ...result } = user;
      
      return result;
    }
    return null;
  }

  // gera o token para o login
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }


}
