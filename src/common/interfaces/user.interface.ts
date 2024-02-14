import BaseInterface from './base.interface';

interface UserInterface extends BaseInterface {
	name: string;
	lastname: string;
	email: string;
	password: string;
	emailVerifiedAt?: Date;
}

export default UserInterface;
