import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import config from 'mikro-orm.config';

@Module({
	imports: [MikroOrmModule.forRoot(config), UserModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
