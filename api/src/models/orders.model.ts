import { InferSchemaType, model, Schema } from "mongoose";

const ordersSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    products_id: [{
        type: Schema.Types.ObjectId,
        ref: 'products'
    }],
    total: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

type Order = InferSchemaType<typeof ordersSchema>

export default model<Order>('orders', ordersSchema);