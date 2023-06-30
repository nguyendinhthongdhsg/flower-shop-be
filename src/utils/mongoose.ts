export default {
    mutipleMongooseToObject: function (mongooses: any) {
        return mongooses.map((mongoose: any) => mongoose.toObject());
    },
    mongooseToObject: function (mongoose: any) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
