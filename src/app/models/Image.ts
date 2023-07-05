import mongoose from 'mongoose';
const Schema = mongoose.Schema;

interface ImageProps {
    id: string;
    data: Buffer;
    contentType: string;
}

const Image = new Schema(
    {
        id: { type: String, require: true },
        data: { type: Buffer, require: true },
        contentType: { type: String, require: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<ImageProps>('Image', Image);
