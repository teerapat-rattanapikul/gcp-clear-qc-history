// import { Logger, Provider } from '@nestjs/common';
// import * as vault from 'node-vault';
// import { IS_VAULT_CONFIGURED } from './constants.config';

// export const VaultConfigProvider: Provider = {
// 	provide: 'VaultConfig',
// 	useFactory: async () => {
// 		const logger = new Logger('VaultConfig');
// 		if (!IS_VAULT_CONFIGURED) {
// 			return {};
// 		}

// 		const vaultClient = vault({
// 			endpoint: process.env.VAULT_URL,
// 			token: process.env.VAULT_TOKEN,
// 		});

// 		logger.debug(`Fetching secret from ${process.env.VAULT_URL}${process.env.VAULT_PATH}`);
// 		const { data: { data } } = await vaultClient.read(process.env.VAULT_PATH as string)
// 			.catch(err => console.error(`\u2717 Field to fetch secrets due to ${err.message}`));
// 		/*
// 		if (process.env.VAULT_DEBUG === 'true') {
// 		  logger.debug(`Secret values are ${JSON.stringify(data)}`);
// 		}
// 		*/
// 		return data as { [key: string]: any };
// 	},
// };
