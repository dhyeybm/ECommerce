const express = require('express');
const mongoose = require('mongoose');

const items = require('./routes/api/items');
const cartitems = require('./routes/api/cartitems');
const app = express();
app.use(express.json());
const db = require('./config/keys.js').mongoURI;
console.log(db)
app.set('json spaces', 2);
mongoose
 	.connect(db,{ useNewUrlParser: true })
 	.then(() => console.log('MongoDB Connected...'))
 	.catch(err => console.log(err));
 const port = process.env.PORT || 5000;

// Routes
app.listen(port,() => console.log(`Server started on port ${port}`));
 

app.use('/api/items',items);
app.use('/api/cartitems',cartitems)