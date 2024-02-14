import { Module } from '@nestjs/common';
import { UserService } from '../../common/services/user.service';
import { UserController } from './user.controller';
import UserRepository from '../../common/repositories/user.repository';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from './entities/user.entity';

@Module({
	imports: [MikroOrmModule.forFeature([User])],
	controllers: [UserController],
	providers: [UserRepository, UserService],
})
export class UserModule {}
