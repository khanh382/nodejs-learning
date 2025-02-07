import mongoose, { HydratedDocument } from 'mongoose';
export type LikeDocument = HydratedDocument<Like>;
export declare class Like {
    restaurant: mongoose.Schema.Types.ObjectId;
}
export declare const LikeSchema: mongoose.Schema<Like, mongoose.Model<Like, any, any, any, mongoose.Document<unknown, any, Like> & Like & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Like, mongoose.Document<unknown, {}, mongoose.FlatRecord<Like>> & mongoose.FlatRecord<Like> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
