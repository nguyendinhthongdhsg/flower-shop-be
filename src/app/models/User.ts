import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { Document } from 'mongoose';
const Schema = mongoose.Schema;

export interface UserProps extends Document {
    name: string;
    image?: string;
    email: string;
    password?: string;
    encryptPassword: (password: string) => string;
    validPassword: (password: string) => boolean;
}

const User = new Schema(
    {
        name: { type: String, require: true },
        image: { type: String },
        email: { type: String, require: true },
        password: { type: String },
    },
    {
        timestamps: true,
    }
);

User.methods.encryptPassword = function (password: string): string {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5));
};
User.methods.validPassword = function (password: string): boolean {
    return bcrypt.compareSync(password, this.password);
};

export default mongoose.model<UserProps>('User', User);
