"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemsService = void 0;
const common_1 = require("@nestjs/common");
let MenuItemsService = class MenuItemsService {
    create(createMenuItemDto) {
        return 'This action adds a new menuItem';
    }
    findAll() {
        return `This action returns all menuItems`;
    }
    findOne(id) {
        return `This action returns a #${id} menuItem`;
    }
    update(id, updateMenuItemDto) {
        return `This action updates a #${id} menuItem`;
    }
    remove(id) {
        return `This action removes a #${id} menuItem`;
    }
};
exports.MenuItemsService = MenuItemsService;
exports.MenuItemsService = MenuItemsService = __decorate([
    (0, common_1.Injectable)()
], MenuItemsService);
//# sourceMappingURL=menu.items.service.js.map