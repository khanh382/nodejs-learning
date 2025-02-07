import mongoose, { HydratedDocument } from 'mongoose';
export type OrderDocument = HydratedDocument<Order>;
export declare class Order {
    restaurant: mongoose.Schema.Types.ObjectId;
    user: mongoose.Schema.Types.ObjectId;
    status: string;
    totalPrice: number;
    orderTime: Date;
    deliveryTime: Date;
}
export declare const OrderSchema: mongoose.Schema<Order, mongoose.Model<Order, any, any, any, mongoose.Document<unknown, any, Order> & Order & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Order, mongoose.Document<unknown, {}, mongoose.FlatRecord<Order>> & mongoose.FlatRecord<Order> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
