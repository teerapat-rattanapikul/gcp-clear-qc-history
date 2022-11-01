export declare type ENV = 'local' | 'dev' | 'qa' | 'preprod' | 'prod';
export declare function getEnv(): ENV;
export declare function isLocalEnv(): boolean;
