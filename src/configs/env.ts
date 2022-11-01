export type ENV = 'local' | 'dev' | 'qa' | 'preprod' | 'prod';

export function getEnv(): ENV {
	return process.env['NODE_ENV'] as ENV || 'local';
}

export function isLocalEnv(): boolean {
	return getEnv() === 'local';
}