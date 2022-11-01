import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
// import { ConfigProvider } from '../configs/config.provider';
// import { VaultConfigProvider } from '../configs/vault-config.provider';

@Global()
@Module({
	imports: [
		NestConfigModule.forRoot({
			envFilePath: [process.env.NODE_ENV ? `${process.env.NODE_ENV}.env` : 'local.env'],
			isGlobal: true,
		}),
	],
	providers: [
		// ConfigProvider,
		// VaultConfigProvider,
	],
	exports: [
		// ConfigProvider,
	],
})
export class ConfigModule {
}
