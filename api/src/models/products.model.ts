import { InferSchemaType, model, Schema } from "mongoose";

const productsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    devise: {
        type: String,
        default: 'USD'
    },
    description: String,
    image: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "categories",
        required: true
    },
}, {
    timestamps: true
});

type Product = InferSchemaType<typeof productsSchema>

export default model<Product>('products', productsSchema);