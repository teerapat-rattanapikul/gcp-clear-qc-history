// import { Inject, Injectable, Logger, Provider } from '@nestjs/common';
// import { ConfigService, NoInferType } from '@nestjs/config';
// import { IS_VAULT_CONFIGURED } from './constants.config';

// export type ConfigManager = {
// 	get<T>(propertyPath: string, defaultValue?: NoInferType<T>): T;
// }

// @Injectable()
// class VaultConfigProvider implements ConfigManager {
// 	private logger: Logger;

// 	constructor(
// 		private configService: ConfigService,
// 		@Inject('VaultConfig') private vaultConfig: { [key: string]: any },
// 	) {
// 		this.logger = new Logger(VaultConfigProvider.name);
// 		this.logger.debug(`\u2713 VaultConfigProvider initialized`);
// 	}

// 	get<T>(propertyPath: string, defaultValue?: NoInferType<T>): T {
// 		if (this.vaultConfig[propertyPath]) {
// 			return this.vaultConfig[propertyPath];
// 		} else {
// 			return defaultValue ? this.configService.get(propertyPath, defaultValue) : this.configService.get(propertyPath) as T;
// 		}
// 	}
// }

// @Injectable()
// class DefaultConfigProvider implements ConfigManager {
// 	private readonly logger = new Logger(DefaultConfigProvider.name);

// 	constructor(private configService: ConfigService) {
// 		this.logger.debug(`\u2713 DefaultConfigProvider initialized`);
// 	}

// 	get<T>(propertyPath: string, defaultValue?: NoInferType<T>): T {
// 		return defaultValue ? this.configService.get(propertyPath, defaultValue) : this.configService.get(propertyPath) as T;
// 	}
// }

// export const ConfigProvider: Provider = {
// 	provide: 'ConfigManager',
// 	useClass: (() => {
// 		// console.log(`VAULT_URL: ${process.env.VAULT_URL}\nVAULT_PATH: ${process.env.VAULT_PATH}\nVAULT_TOKEN: ${process.env.VAULT_TOKEN}`);
// 		return IS_VAULT_CONFIGURED ? VaultConfigProvider : DefaultConfigProvider;
// 	})(),
// };
