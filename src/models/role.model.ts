import mongoose from "mongoose";
import { ModelEnum } from "../utils/constants";

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    description: {
        type: String,
        required: [true, 'description is required']
    },
}, {timestamps: true})

const Role = mongoose.model(ModelEnum.Role, roleSchema)

export default Role
