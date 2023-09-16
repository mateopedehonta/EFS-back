import { Schema, model } from "mongoose"
import { userBasicInfo } from "./user"

export const attachmentSchema = new Schema(
  {
    description: { type: String, required: true },
    file_name: { type: String, required: true },
    file_size: { type: Number, required: true },
    file_ext: { type: String, required: true },
    entity: { type: String, required: true },
    entity_id: { type: Schema.Types.ObjectId, required: true },
    url: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
    creatorInfo: userBasicInfo,
    deleted: { type: Boolean, default: false },
    deleterInfo: userBasicInfo,
  },
  { timestamps: true }
)
const AttachmentModel = model("Attachment", attachmentSchema, "attachments")
export default AttachmentModel
