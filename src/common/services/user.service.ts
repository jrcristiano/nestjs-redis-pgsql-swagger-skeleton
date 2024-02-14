import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/modules/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/modules/users/dto/update-user.dto';
import UserRepository from '../repositories/user.repository';
import { InjectRepository } from '@mikro-orm/nestjs';
import { User } from 'src/modules/users/entities/user.entity';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: UserRepository,
	) {}

	create(createUserDto: CreateUserDto) {
		return this.userRepository.create(createUserDto);
	}

	findAll() {
		return this.userRepository.findAll();
	}

	findOne(uuid: string) {
		return this.userRepository.findOne(uuid);
	}

	update(uuid: string, updateUserDto: UpdateUserDto) {
		return this.userRepository.nativeUpdate({ uuid }, updateUserDto);
	}

	destroy(uuid: string) {
		return this.userRepository.nativeDelete({ uuid });
	}
}
