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
exports.MenuItemSchema = exports.MenuItem = void 0;
const menu_schema_1 = require("../../menus/schemas/menu.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let MenuItem = class MenuItem {
};
exports.MenuItem = MenuItem;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.default.Schema.Types.ObjectId, ref: menu_schema_1.Menu.name }),
    __metadata("design:type", mongoose_2.default.Schema.Types.ObjectId)
], MenuItem.prototype, "menu", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MenuItem.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MenuItem.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MenuItem.prototype, "basePrice", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MenuItem.prototype, "image", void 0);
exports.MenuItem = MenuItem = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], MenuItem);
exports.MenuItemSchema = mongoose_1.SchemaFactory.createForClass(MenuItem);
//# sourceMappingURL=menu.item.schema.js.map