import {
	IsDate,
	IsEmail,
	IsNotEmpty,
	IsOptional,
	IsString,
	Max,
	Min,
} from 'class-validator';

export class CreateUserDto {
	@Min(3)
	@Max(255)
	@IsString()
	@IsNotEmpty()
	name: string;

	@Min(3)
	@Max(255)
	@IsString()
	@IsNotEmpty()
	lastname: string;

	@IsEmail()
	@Min(3)
	@Max(255)
	@IsNotEmpty()
	email: string;

	@Min(8)
	@Max(255)
	@IsString()
	@IsNotEmpty()
	password: string;

	@IsDate()
	@IsOptional()
	emailVerifiedAt?: Date;
}
