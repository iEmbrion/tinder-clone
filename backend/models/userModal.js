import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, 'Name is required'],
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

export default mongoose.model('User', userSchema);
