const mongoose = require('mongoose')

async function initDB() {
  try {
    await mongoose.connect(process.env.DB_URI, { dbName: 'Ecommerces' })
    console.log("Connected to DB Successfully")
  } catch (err) {
    console.log("Error connecting to DB")
  }
}

module.exports =  initDB
