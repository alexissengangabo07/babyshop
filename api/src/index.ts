import app from "./app";
import mongoose from "mongoose";

const PORT = process.env.PORT;
const DB_URL = process.env.DATABASE_URL;

mongoose.connect(DB_URL!)
    .then(() => {
        console.log(`Database connected`)
        app.listen(PORT, () => console.log(`Server listening on ${PORT}`))
    })
    .catch(err => console.error(err));