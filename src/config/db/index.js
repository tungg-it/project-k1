const mongoose = require("mongoose");

const config = require("../config");

async function connect() {
  try {
    await mongoose.connect(config.database.url);
    console.log("Connect successfully!!!");
  } catch (error) {
    console.log("Connect failure!!!");
  }
}

module.exports = { connect };
