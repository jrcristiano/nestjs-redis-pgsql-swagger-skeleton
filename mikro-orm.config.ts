import { Logger } from '@nestjs/common';
import { Options, defineConfig } from '@mikro-orm/core';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { Migrator } from '@mikro-orm/migrations';
import * as dotenv from 'dotenv';
dotenv.config();

const logger = new Logger('MikroORM');

const config = {
	entities: ['dist/**/*.entity.js'],
	entitiesTs: ['src/modules/**/*.entity.ts'],
	dbName: process.env.DB_NAME,
	driver: PostgreSqlDriver,
	host: process.env.DB_HOST || '127.0.0.1',
	port: process.env.DB_PORT || 5432,
	highlighter: new SqlHighlighter(),
	debug: true,
	logger: logger.log.bind(logger),
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	metadataProvider: TsMorphMetadataProvider,
	migrations: {
		tableName: 'mikro_orm_migrations',
		path: './src/database/migrations',
		pattern: /^[\w-]+\d+\.ts$/,
		transactional: true,
		disableForeignKeys: true,
		allOrNothing: true,
		dropTables: true,
		safe: true,
		emit: 'ts',
	},
} as Options;

export default defineConfig({
	...config,
	extensions: [Migrator],
});
