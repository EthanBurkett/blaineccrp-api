import { Schema, model, ObjectId, SchemaTypes } from "mongoose";

export interface Session {
  _id: ObjectId;
  expires: Date;
  session: any;
}

const SessionSchema = new Schema<Session>({
  _id: {
    type: SchemaTypes.ObjectId,
    required: true,
    unique: true,
  },
  expires: {
    type: Date,
    required: true,
  },
  session: {
    type: String,
    required: true,
  },
});

export default model<Session>("sessions", SessionSchema);
