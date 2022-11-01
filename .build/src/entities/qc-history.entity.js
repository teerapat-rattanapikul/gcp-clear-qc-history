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
exports.QCHistory = void 0;
const typeorm_1 = require("typeorm");
const date_base_entity_1 = require("./date-base.entity");
const column_numeric_transformer_1 = require("./transformer/column-numeric.transformer");
let QCHistory = class QCHistory extends date_base_entity_1.DateBaseEntity {
};
__decorate([
    (0, typeorm_1.Column)('bigint', {
        name: 'id',
        primary: true,
        generated: 'increment',
        transformer: new column_numeric_transformer_1.ColumnNumericTransformer(),
    }),
    __metadata("design:type", Number)
], QCHistory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'merchant_bussiness_type', transformer: new column_numeric_transformer_1.ColumnNumericTransformer() }),
    __metadata("design:type", Number)
], QCHistory.prototype, "merchantBussinessType", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'shop_id', transformer: new column_numeric_transformer_1.ColumnNumericTransformer() }),
    __metadata("design:type", Number)
], QCHistory.prototype, "shopId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'shop_name', length: 100 }),
    __metadata("design:type", String)
], QCHistory.prototype, "shopName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'shop_qc_status', length: 20 }),
    __metadata("design:type", String)
], QCHistory.prototype, "shopQcStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'approve', type: 'int' }),
    __metadata("design:type", String)
], QCHistory.prototype, "approve", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'reject', type: 'int' }),
    __metadata("design:type", String)
], QCHistory.prototype, "reject", void 0);
QCHistory = __decorate([
    (0, typeorm_1.Entity)('qc_history')
], QCHistory);
exports.QCHistory = QCHistory;
//# sourceMappingURL=qc-history.entity.js.map