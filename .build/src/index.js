"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const express_1 = __importDefault(require("express"));
const helloWorld = (event, context) => {
    const message = event.data || null;
    const server = (0, express_1.default)();
    class AppModule {
    }
    console.log(message);
    const createNestServer = async (expressInstance) => {
        const app = await core_1.NestFactory.create(AppModule, new platform_express_1.ExpressAdapter(expressInstance));
        return app.init();
    };
    createNestServer(server)
        .then((v) => {
        console.log(message);
        console.log('running....');
    });
};
exports.helloWorld = helloWorld;
//# sourceMappingURL=index.js.map