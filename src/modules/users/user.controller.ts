import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	Delete,
	Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from '../../common/services/user.service';

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	create(@Body() createUserDto: CreateUserDto) {
		return this.userService.create(createUserDto);
	}

	@Get()
	findAll() {
		return this.userService.findAll();
	}

	@Get(':uuid')
	findOne(@Param('uuid') uuid: string) {
		return this.userService.findOne(uuid);
	}

	@Put(':uuid')
	update(@Param('uuid') uuid: string, @Body() updateUserDto: UpdateUserDto) {
		return this.userService.update(uuid, updateUserDto);
	}

	@Delete(':uuid')
	remove(@Param('uuid') uuid: string) {
		return this.userService.destroy(uuid);
	}
}
