import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {  Model } from 'mongoose';
import { userDto } from './dtos/userDtos';
import { user } from './entidade/user.entidade';
import * as bcrypt from 'bcrypt';




@Injectable()
export class UserService {


// ligaçao com o bancos de dados

constructor(
@InjectModel('user') private readonly userModel: Model<user>) {}




// fazendo o cadastro no banco de dados 

async criarUser(userDto:userDto):Promise<user> {

    
  let {
        nome,
        email,
        password,
    } = userDto

    

    const userEncontrado = await this.userModel.findOne({email}).exec();

    console.log(userEncontrado)

    if(userEncontrado){
        throw new BadRequestException(` Jogador com e-mail ${email} Já cadastrado `)
    }

    
    const senha = bcrypt.hashSync(password,10)  // criando uma hash

    const user: userDto = {

        nome,
        email,
        password:senha   // a senha vai virar uma hash no banco

    }

   
    //user.password = hashSync(password,10)

    

    const usercriado = new this.userModel(user)

   // user.password = bcrypt.hashSync(user.password, 10);
    
    return await usercriado.save()

}
/*
async login(userDto:userDto):Promise<user>{

    let {
        email,
       password

    } = userDto



 const userEmail  = await this.userModel.findOne({email});
 const userPassword  = await this.userModel.findOne({password});
 

 const isMatch = await bcrypt.compareSync(userDto.password,password);

 console.log( userEmail,isMatch)

 if(!userEmail || isMatch === false){

    throw new BadRequestException(` ERRO  `)

}else if (userEmail && isMatch === true) {

    throw new BadRequestException(` Jogador com e-mail ${email} `)
 
    
}


    return 
}
*/



}
