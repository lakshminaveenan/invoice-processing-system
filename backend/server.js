const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const invoiceRoutes = require('./routes/invoiceRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB connection details
const DB_USER = 'admin';
const DB_PASS = '9w7B75ltpoQx98i1';

// MongoDB connection string
const mongoURI = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.7gciv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    console.log('MongoDB connected successfully');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

// Routes
app.use('/api', invoiceRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
