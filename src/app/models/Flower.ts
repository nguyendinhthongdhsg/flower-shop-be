import mongoose from 'mongoose';
const Schema = mongoose.Schema;

interface FlowerProps {
    name: string;
    price: number;
    id: string;
}

const Flower = new Schema(
    {
        name: { type: String, require: true },
        price: { type: Number, require: true },
        id: { type: String, require: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<FlowerProps>('Flower', Flower);
