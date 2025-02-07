import mongoose, { HydratedDocument } from 'mongoose';
export type MenuItemDocument = HydratedDocument<MenuItem>;
export declare class MenuItem {
    menu: mongoose.Schema.Types.ObjectId;
    title: string;
    description: string;
    basePrice: number;
    image: string;
}
export declare const MenuItemSchema: mongoose.Schema<MenuItem, mongoose.Model<MenuItem, any, any, any, mongoose.Document<unknown, any, MenuItem> & MenuItem & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, MenuItem, mongoose.Document<unknown, {}, mongoose.FlatRecord<MenuItem>> & mongoose.FlatRecord<MenuItem> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
