import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://carlos:123@cluster0.3pkxtsq.mongodb.net/LoginBanco?retryWrites=true&w=majority'),
   UserModule,
   AuthModule],
  controllers: [],
  providers:[],
})
export class AppModule {


}
