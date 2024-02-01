import { InferSchemaType, model, Schema } from "mongoose";

const stockSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: "products",
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    size: {
        type: String
    }
}, {
    timestamps: true
});

type Stock = InferSchemaType<typeof stockSchema>

export default model<Stock>('stock', stockSchema);