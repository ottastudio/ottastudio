import { Type, createSchema } from "ts-mongoose";

export default createSchema(
  {
    email: Type.string({ required: true, unique: true, trim: true })
  },
  { timestamps: { createdAt: true } }
);
