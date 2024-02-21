import { InferSchemaType, model, Schema } from "mongoose";

const ordersSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    productsId: [{
        type: Object
    }],
    total: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

type Order = InferSchemaType<typeof ordersSchema>

export default model<Order>('orders', ordersSchema);