"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QCHistory = exports.initialApp = void 0;
const batch_module_1 = require("./modules/batch.module");
const core_1 = require("@nestjs/core");
const qc_history_service_1 = require("./services/qc-history.service");
const platform_express_1 = require("@nestjs/platform-express");
const express_1 = __importDefault(require("express"));
const initialApp = async (expressInstance) => {
    const app = await core_1.NestFactory.create(batch_module_1.BatchModule, new platform_express_1.ExpressAdapter(expressInstance));
    return app;
};
exports.initialApp = initialApp;
const QCHistory = async (event) => {
    const server = (0, express_1.default)();
    console.log(`#main delete qc history start`);
    const app = await (0, exports.initialApp)(server);
    const qcHistory = app.get(qc_history_service_1.QCHistoryService);
    const changeDate = new Date().setDate(new Date().getDate() - 7);
    const limitDate = new Date(changeDate);
    console.log(`limit date ${limitDate}`);
    await qcHistory.deleteQCHistoryById(limitDate);
    console.log('#main delete qc history end');
    await app.close();
    return true;
};
exports.QCHistory = QCHistory;
//# sourceMappingURL=index.js.map