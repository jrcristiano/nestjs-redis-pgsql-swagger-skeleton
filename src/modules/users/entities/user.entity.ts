import { Entity, PrimaryKey, Property, Unique } from '@mikro-orm/core';
import firstUpper from '../../../common/utils/first.upper';
import { v4 } from 'uuid';
import UserInterface from '../../../common/interfaces/user.interface';

@Entity({ tableName: 'users' })
export class User {
	@PrimaryKey({ type: 'uuid' })
	uuid: string;

	@Property()
	name: string;

	@Property()
	lastname: string;

	@Property()
	@Unique()
	email: string;

	@Property()
	password: string;

	@Property()
	emailVerifiedAt: Date;

	@Property()
	createdAt = new Date();

	@Property({ onUpdate: () => new Date() })
	updatedAt = new Date();

	constructor({
		uuid,
		name,
		lastname,
		email,
		password,
		emailVerifiedAt,
	}: UserInterface) {
		this.uuid = uuid ?? v4();
		this.name = firstUpper(name);
		this.lastname = firstUpper(lastname);
		this.email = email.toLowerCase();
		this.password = password;
		this.emailVerifiedAt = emailVerifiedAt;
	}
}
