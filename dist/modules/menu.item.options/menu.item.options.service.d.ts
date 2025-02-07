import { CreateMenuItemOptionDto } from './dto/create-menu.item.option.dto';
import { UpdateMenuItemOptionDto } from './dto/update-menu.item.option.dto';
export declare class MenuItemOptionsService {
    create(createMenuItemOptionDto: CreateMenuItemOptionDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMenuItemOptionDto: UpdateMenuItemOptionDto): string;
    remove(id: number): string;
}
