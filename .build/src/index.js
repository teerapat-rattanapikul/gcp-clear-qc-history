"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QCHistory = void 0;
const batch_module_1 = require("./modules/batch.module");
const core_1 = require("@nestjs/core");
const qc_history_service_1 = require("./services/qc-history.service");
const initialApp = async () => {
    const app = await core_1.NestFactory.create(batch_module_1.BatchModule);
    return app;
};
const QCHistory = async (event) => {
    console.log(`#main delete qc history start`);
    const app = await initialApp();
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