import { HydratedDocument } from 'mongoose';
export type RestaurantDocument = HydratedDocument<Restaurant>;
export declare class Restaurant {
    name: string;
    phone: string;
    address: string;
    email: string;
    rating: number;
}
export declare const RestaurantSchema: import("mongoose").Schema<Restaurant, import("mongoose").Model<Restaurant, any, any, any, import("mongoose").Document<unknown, any, Restaurant> & Restaurant & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Restaurant, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Restaurant>> & import("mongoose").FlatRecord<Restaurant> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
