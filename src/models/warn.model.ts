import { Types, model, Schema } from "mongoose";

export interface Warn {
  warnId: any;
  discordId: string;
  reason: string;
  date: Date;
}

const WarnSchema = new Schema<Warn>({
  warnId: {
    type: Types.ObjectId,
    required: true,
    unique: true,
  },
  discordId: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

export default model<Warn>("warns", WarnSchema);
