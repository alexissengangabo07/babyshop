import { InferSchemaType, model, Schema } from "mongoose";

const categoriesSchema = new Schema({
    title: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

type Categorie = InferSchemaType<typeof categoriesSchema>

export default model<Categorie>('categories', categoriesSchema);