import { Schema, model, models } from 'mongoose';

const StockListSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    symbol: {
        type: String,
    },
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
});

const StockList = models.StockList || model('StockList', StockListSchema);

export default StockList;