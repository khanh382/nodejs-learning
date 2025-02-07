import mongoose, { HydratedDocument } from 'mongoose';
export type OrderDetailDocument = HydratedDocument<OrderDetail>;
export declare class OrderDetail {
    order: mongoose.Schema.Types.ObjectId;
    menu: mongoose.Schema.Types.ObjectId;
    menuItem: mongoose.Schema.Types.ObjectId;
    menuItemOption: mongoose.Schema.Types.ObjectId;
}
export declare const OrderDetailSchema: mongoose.Schema<OrderDetail, mongoose.Model<OrderDetail, any, any, any, mongoose.Document<unknown, any, OrderDetail> & OrderDetail & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, OrderDetail, mongoose.Document<unknown, {}, mongoose.FlatRecord<OrderDetail>> & mongoose.FlatRecord<OrderDetail> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
