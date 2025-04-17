// src/models/Balance.ts
import { Schema, model, Document } from 'mongoose';

export interface IBalance extends Document {
  datetime: Date;
  generation: number;
  demand: number;
  netInterchanges: number;
}

const BalanceSchema = new Schema<IBalance>(
  {
    datetime: {
      type: Date,
      required: true,
      unique: true,
      index: true,
    },
    generation: {
      type: Number,
      required: true,
    },
    demand: {
      type: Number,
      required: true,
    },
    netInterchanges: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: false,
    collection: 'balances',
  }
);

const Balance = model<IBalance>('Balance', BalanceSchema);
export default Balance;
