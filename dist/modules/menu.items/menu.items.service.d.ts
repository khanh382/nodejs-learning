import { CreateMenuItemDto } from './dto/create-menu.item.dto';
import { UpdateMenuItemDto } from './dto/update-menu.item.dto';
export declare class MenuItemsService {
    create(createMenuItemDto: CreateMenuItemDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMenuItemDto: UpdateMenuItemDto): string;
    remove(id: number): string;
}
