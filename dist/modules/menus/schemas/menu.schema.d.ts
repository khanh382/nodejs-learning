import mongoose, { HydratedDocument } from 'mongoose';
export type MenuDocument = HydratedDocument<Menu>;
export declare class Menu {
    restaurant: mongoose.Schema.Types.ObjectId;
    title: string;
    description: string;
    image: string;
}
export declare const MenuSchema: mongoose.Schema<Menu, mongoose.Model<Menu, any, any, any, mongoose.Document<unknown, any, Menu> & Menu & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Menu, mongoose.Document<unknown, {}, mongoose.FlatRecord<Menu>> & mongoose.FlatRecord<Menu> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
