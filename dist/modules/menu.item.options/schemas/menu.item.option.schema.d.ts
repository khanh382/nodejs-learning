import mongoose, { HydratedDocument } from 'mongoose';
export type MenuItemOptionDocument = HydratedDocument<MenuItemOption>;
export declare class MenuItemOption {
    menuItem: mongoose.Schema.Types.ObjectId;
    title: string;
    description: string;
    additionalPrice: number;
    optionalDescription: string;
}
export declare const MenuItemOptionSchema: mongoose.Schema<MenuItemOption, mongoose.Model<MenuItemOption, any, any, any, mongoose.Document<unknown, any, MenuItemOption> & MenuItemOption & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, MenuItemOption, mongoose.Document<unknown, {}, mongoose.FlatRecord<MenuItemOption>> & mongoose.FlatRecord<MenuItemOption> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
