import { model, Schema } from "mongoose";

export interface Application {
  status: "approved" | "denied" | "pending";
  discordID: string;
  applicationId: string;
  date: Date;
  fields: string[];
}

const ApplicationSchema = new Schema<Application>({
  applicationId: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    required: true,
  },
  discordID: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  fields: {
    type: [String],
    required: true,
  },
});

export default model("applications", ApplicationSchema);
