"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const PORT = process.env.PORT;
const DB_URL = process.env.DATABASE_URL;
mongoose_1.default.connect(DB_URL)
    .then(() => {
    console.log(`Database connected`);
    app_1.default.listen(PORT, () => console.log(`Server listening on ${PORT}`));
})
    .catch(err => console.error(err));
