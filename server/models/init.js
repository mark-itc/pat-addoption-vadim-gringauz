const mongoose = require('mongoose')
const UsersDAO = require('../models/UsersDAO')

module.exports.initDB = async function initDB() {
    mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    const db = mongoose.connection
    db.on('error', (error) => console.error(error))
    db.once('open', () => console.log('✅ Connected to DB'))
}