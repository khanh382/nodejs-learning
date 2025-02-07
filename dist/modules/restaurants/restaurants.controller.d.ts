import { RestaurantsService } from './restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
export declare class RestaurantsController {
    private readonly restaurantsService;
    constructor(restaurantsService: RestaurantsService);
    create(createRestaurantDto: CreateRestaurantDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRestaurantDto: UpdateRestaurantDto): string;
    remove(id: string): string;
}
