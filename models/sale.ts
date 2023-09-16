import { Schema, Types, model } from "mongoose"

const saleSchema = new Schema(
  {
    operation_date: Date,
    total_amount: Number,
    gathered: Number,
    products: [
      {
        code: String,
        name: String,
        iva: Number,
        unit_price: Number,
        discount: { type: Number, default: 0 },
      },
    ],
    payment_methods: [
      {
        method: { type: String },
        amount: { type: Number, required: true },
        time_unit: { type: String },
        time_value: { type: Number },
      },
    ],
    user: { type: Types.ObjectId, ref: "User" },
    client: { type: Types.ObjectId, ref: "Client" },
    creation: {
      unixDate: Number,
      day: Number,
      month: Number,
      year: Number,
    },
    referalDoc: String,
    attachments: [String],
    comments: Number,
  },
  { timestamps: true }
)

const SaleModel = model("Sale", saleSchema, "sales")

export default SaleModel
