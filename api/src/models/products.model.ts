import { InferSchemaType, model, Schema } from "mongoose";

const productsSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    // marque: {
    //     type: String,
    //     required: true
    // },
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
    category: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
}, {
    timestamps: true
});

type Product = InferSchemaType<typeof productsSchema>

export default model<Product>('products', productsSchema);