"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemOptionsModule = void 0;
const common_1 = require("@nestjs/common");
const menu_item_options_service_1 = require("./menu.item.options.service");
const menu_item_options_controller_1 = require("./menu.item.options.controller");
let MenuItemOptionsModule = class MenuItemOptionsModule {
};
exports.MenuItemOptionsModule = MenuItemOptionsModule;
exports.MenuItemOptionsModule = MenuItemOptionsModule = __decorate([
    (0, common_1.Module)({
        controllers: [menu_item_options_controller_1.MenuItemOptionsController],
        providers: [menu_item_options_service_1.MenuItemOptionsService],
    })
], MenuItemOptionsModule);
//# sourceMappingURL=menu.item.options.module.js.map