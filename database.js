const mongoose = require('mongoose');

// Define the MongoDB connection URL
const mongourl = 'mongodb://127.0.0.1:27017/myhotels';

// Connect to MongoDB
mongoose.connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Get the default connection
const database = mongoose.connection;

// Event listeners
database.on('connected', () => {
    console.log('Connected to MongoDB server');
});
database.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
database.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

module.exports = database;
