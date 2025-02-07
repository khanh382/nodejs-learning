import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import mongoose from 'mongoose';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    isEmailExist: (email: string) => Promise<boolean>;
    create(createUserDto: CreateUserDto): Promise<{
        _id: mongoose.Types.ObjectId;
    }>;
    findAll(query: string, current: number, pageSize: number): Promise<{
        results: (mongoose.Document<unknown, {}, User> & User & {
            _id: mongoose.Types.ObjectId;
        } & {
            __v: number;
        })[];
        totalPages: number;
    }>;
    findOne(id: number): string;
    update(updateUserDto: UpdateUserDto): Promise<mongoose.UpdateWriteOpResult>;
    remove(_id: string): Promise<mongoose.mongo.DeleteResult>;
}
