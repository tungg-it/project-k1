import mongoose from 'mongoose';
import config from '@config/config';

async function connect() {
  try {
    await mongoose.connect(config.database.url);
    console.log('Connect successfully!!!');
  } catch (error) {
    console.log('Connect failure!!!');
  }
}

export default { connect };
