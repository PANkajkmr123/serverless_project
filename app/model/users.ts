import mongoose from 'mongoose';

export type UsersDocument = mongoose.Document & {
  name: string;
  id: number;
  email?: string;
  address:string;
  phoneNumber:string;
  country:string;
  skill:string;
  createdAtOn: Date,
};

const usersSchema = new mongoose.Schema({
  name: String,
  id: { type: Number, index: true, unique: true },
  email: { type: String },
  address: { type: String },
  phoneNumber: { type: String },
  country: { type: String },
  skill: { type: String },
  description: String,
  createdAtOn: { type: Date, default: Date.now },
},{
  timestamps: true,
  versionKey: false
});

// Note: OverwriteModelError: Cannot overwrite `Users` model once compiled. error
export const users = (mongoose.models.users ||
mongoose.model<UsersDocument>('users', usersSchema, process.env.DB_USERS_COLLECTION)
);