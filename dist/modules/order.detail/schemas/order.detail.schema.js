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
exports.OrderDetailSchema = exports.OrderDetail = void 0;
const menu_item_option_schema_1 = require("../../menu.item.options/schemas/menu.item.option.schema");
const menu_item_schema_1 = require("../../menu.items/schemas/menu.item.schema");
const menu_schema_1 = require("../../menus/schemas/menu.schema");
const order_schema_1 = require("../../orders/schemas/order.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let OrderDetail = class OrderDetail {
};
exports.OrderDetail = OrderDetail;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: order_schema_1.Order.name }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], OrderDetail.prototype, "order", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: menu_schema_1.Menu.name }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], OrderDetail.prototype, "menu", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: menu_item_schema_1.MenuItem.name }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], OrderDetail.prototype, "menuItem", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: menu_item_option_schema_1.MenuItemOption.name }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], OrderDetail.prototype, "menuItemOption", void 0);
exports.OrderDetail = OrderDetail = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], OrderDetail);
exports.OrderDetailSchema = mongoose_1.SchemaFactory.createForClass(OrderDetail);
//# sourceMappingURL=order.detail.schema.js.map