import { model, Schema } from "mongoose";

export interface ApplicationTemplate {
  title: string;
  description: string;
  fields: string[];
  available: boolean;
}

const ApplicationTemplateSchema = new Schema<ApplicationTemplate>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  fields: {
    type: [String],
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
});

export default model("applicationTemplates", ApplicationTemplateSchema);
