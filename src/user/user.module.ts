import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from '../auth/auth.service';
import { userSchema } from './entidade/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserListaService } from './user-lista.service';

@Module({

  imports:[MongooseModule.forFeature([{ name: 'user', schema: userSchema }]),],

  controllers: [UserController],
  providers: [UserService, UserListaService,],
  exports: [UserService,UserListaService],
})
export class UserModule {} 
