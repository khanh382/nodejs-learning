import mongoose, { HydratedDocument } from 'mongoose';
export type ReviewDocument = HydratedDocument<Review>;
export declare class Review {
    user: mongoose.Schema.Types.ObjectId;
    restaurant: mongoose.Schema.Types.ObjectId;
    rating: number;
    image: string;
    comment: string;
}
export declare const ReviewSchema: mongoose.Schema<Review, mongoose.Model<Review, any, any, any, mongoose.Document<unknown, any, Review> & Review & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Review, mongoose.Document<unknown, {}, mongoose.FlatRecord<Review>> & mongoose.FlatRecord<Review> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
