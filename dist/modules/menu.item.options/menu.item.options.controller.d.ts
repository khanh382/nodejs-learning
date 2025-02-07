import { MenuItemOptionsService } from './menu.item.options.service';
import { CreateMenuItemOptionDto } from './dto/create-menu.item.option.dto';
import { UpdateMenuItemOptionDto } from './dto/update-menu.item.option.dto';
export declare class MenuItemOptionsController {
    private readonly menuItemOptionsService;
    constructor(menuItemOptionsService: MenuItemOptionsService);
    create(createMenuItemOptionDto: CreateMenuItemOptionDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMenuItemOptionDto: UpdateMenuItemOptionDto): string;
    remove(id: string): string;
}
