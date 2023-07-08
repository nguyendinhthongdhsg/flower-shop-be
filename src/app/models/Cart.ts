import mongoose from 'mongoose';
const Schema = mongoose.Schema;

interface CartProps {
    id: string;
    name: string;
    price: number;
    length: number;
    userId: string;
}

const Cart = new Schema(
    {
        id: { type: String, require: true },
        name: { type: String, require: true },
        price: { type: Number, require: true },
        length: { type: Number, require: true },
        userId: { type: String, require: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<CartProps>('Cart', Cart);
