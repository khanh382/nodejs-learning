import { MenuItemsService } from './menu.items.service';
import { CreateMenuItemDto } from './dto/create-menu.item.dto';
import { UpdateMenuItemDto } from './dto/update-menu.item.dto';
export declare class MenuItemsController {
    private readonly menuItemsService;
    constructor(menuItemsService: MenuItemsService);
    create(createMenuItemDto: CreateMenuItemDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMenuItemDto: UpdateMenuItemDto): string;
    remove(id: string): string;
}
