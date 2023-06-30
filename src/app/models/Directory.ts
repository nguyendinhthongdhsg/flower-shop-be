import mongoose from 'mongoose';
const Schema = mongoose.Schema;

interface DirectoryProps {
    name: string;
    id: string;
}

const Directory = new Schema(
    {
        name: { type: String, require: true },
        id: { type: String, require: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<DirectoryProps>('Directory', Directory);
