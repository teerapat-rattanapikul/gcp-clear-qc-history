"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLocalEnv = exports.getEnv = void 0;
function getEnv() {
    return process.env['NODE_ENV'] || 'local';
}
exports.getEnv = getEnv;
function isLocalEnv() {
    return getEnv() === 'local';
}
exports.isLocalEnv = isLocalEnv;
//# sourceMappingURL=env.js.map