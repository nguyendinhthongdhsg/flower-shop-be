import mongoose from 'mongoose';
import { ConnectOptions } from 'mongoose';

async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://nguyendinhthongdhsg:anhladuado1@database1.zxzprrz.mongodb.net/FlowerShop',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            } as ConnectOptions
        );
        console.log('Connect Mongodb Success!');
    } catch {
        console.log('Connect Failure!');
    }
}

export default { connect };
