import { EntityRepository } from '@mikro-orm/core';
import { User } from '../../modules/users/entities/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class UserRepository extends EntityRepository<User> {}
