import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
export declare class RestaurantsService {
    create(createRestaurantDto: CreateRestaurantDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRestaurantDto: UpdateRestaurantDto): string;
    remove(id: number): string;
}
