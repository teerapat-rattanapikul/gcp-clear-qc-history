"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QCHistoryService = void 0;
const common_1 = require("@nestjs/common");
const qc_history_repository_1 = require("../repositories/qc-history.repository");
let QCHistoryService = class QCHistoryService {
    constructor(qcHistoryRepository) {
        this.qcHistoryRepository = qcHistoryRepository;
    }
    async getQCHistory() {
        console.log(`#get QC History Data`);
        const getData = this.qcHistoryRepository.createQueryBuilder('qcHistory').getMany();
        return getData;
    }
    async deleteQCHistoryById(currentDate) {
        console.log(`#start delete QC History`);
        await this.qcHistoryRepository
            .createQueryBuilder('qcHistory')
            .delete()
            .where('createdDate < :currentDate', { currentDate })
            .execute();
        console.log(`#end delete QC History`);
    }
};
QCHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [qc_history_repository_1.QCHistoryRepository])
], QCHistoryService);
exports.QCHistoryService = QCHistoryService;
//# sourceMappingURL=qc-history.service.js.map