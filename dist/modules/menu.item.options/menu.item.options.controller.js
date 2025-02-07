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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemOptionsController = void 0;
const common_1 = require("@nestjs/common");
const menu_item_options_service_1 = require("./menu.item.options.service");
const create_menu_item_option_dto_1 = require("./dto/create-menu.item.option.dto");
const update_menu_item_option_dto_1 = require("./dto/update-menu.item.option.dto");
let MenuItemOptionsController = class MenuItemOptionsController {
    constructor(menuItemOptionsService) {
        this.menuItemOptionsService = menuItemOptionsService;
    }
    create(createMenuItemOptionDto) {
        return this.menuItemOptionsService.create(createMenuItemOptionDto);
    }
    findAll() {
        return this.menuItemOptionsService.findAll();
    }
    findOne(id) {
        return this.menuItemOptionsService.findOne(+id);
    }
    update(id, updateMenuItemOptionDto) {
        return this.menuItemOptionsService.update(+id, updateMenuItemOptionDto);
    }
    remove(id) {
        return this.menuItemOptionsService.remove(+id);
    }
};
exports.MenuItemOptionsController = MenuItemOptionsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_menu_item_option_dto_1.CreateMenuItemOptionDto]),
    __metadata("design:returntype", void 0)
], MenuItemOptionsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MenuItemOptionsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MenuItemOptionsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_menu_item_option_dto_1.UpdateMenuItemOptionDto]),
    __metadata("design:returntype", void 0)
], MenuItemOptionsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MenuItemOptionsController.prototype, "remove", null);
exports.MenuItemOptionsController = MenuItemOptionsController = __decorate([
    (0, common_1.Controller)('menu-item-options'),
    __metadata("design:paramtypes", [menu_item_options_service_1.MenuItemOptionsService])
], MenuItemOptionsController);
//# sourceMappingURL=menu.item.options.controller.js.map