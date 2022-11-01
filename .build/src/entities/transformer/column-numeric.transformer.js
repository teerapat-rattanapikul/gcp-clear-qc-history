"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnNumericTransformer = void 0;
class ColumnNumericTransformer {
    to(data) {
        return data;
    }
    from(data) {
        if (data == null) {
            return null;
        }
        return parseFloat(data);
    }
}
exports.ColumnNumericTransformer = ColumnNumericTransformer;
//# sourceMappingURL=column-numeric.transformer.js.map