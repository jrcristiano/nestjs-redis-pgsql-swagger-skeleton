import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.setGlobalPrefix(process.env.API_SWAGGER_PREFIX);

	const config = new DocumentBuilder()
		.setTitle(process.env.API_SWAGGER_TITLE)
		.setDescription(process.env.API_SWAGGER_DESCRIPTION)
		.setVersion(process.env.API_VERSION)
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup(process.env.API_SWAGGER_PREFIX, app, document);

	await app.listen(process.env.API_PORT);
}

bootstrap();
