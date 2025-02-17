import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<{
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(query: string, current: string, pageSize: string): Promise<{
        results: (import("mongoose").Document<unknown, {}, import("./schemas/user.schema").User> & import("./schemas/user.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
        totalPages: number;
    }>;
    findOne(id: string): string;
    update(updateUserDto: UpdateUserDto): Promise<import("mongoose").UpdateWriteOpResult>;
    remove(id: string): Promise<import("mongodb").DeleteResult>;
}
