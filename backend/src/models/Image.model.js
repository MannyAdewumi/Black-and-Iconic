import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    url: {
      type: String,
      required: true,
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    tags: [String], // e.g. ["fashion", "black excellence"]
    category: {
      type: String,
      enum: ['portrait', 'corporate', 'fashion', 'culture', 'event', 'editorial', 'other'],
      default: 'other',
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    downloads: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Image', imageSchema);
