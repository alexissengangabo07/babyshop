import { InferSchemaType, model, Schema } from "mongoose";

const usersSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    telephone:{
        type: String
    },
    adresse: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'client'
    }
}, {
    timestamps: true
});

type User = InferSchemaType<typeof usersSchema>

export default model<User>('users', usersSchema);