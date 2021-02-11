const mongoose = require('mongoose');
//Connect Mongoose to MongoDB
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("CONNECTION OPEN!!!")
})
.catch(err => {
    console.log("OH NO ERROR!!!")
    console.log(err)
})

const productSchema = new mongoose.Schema({
//this syntax alllows you to make a property required
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    }
});

const Product = mongoose.model('Product', productSchema);

const backpack = new Product({name: 'Travel Backpack', price: 39.99})
bike.save()
.then(data => {
    console.log("IT WORKED!")
    console.log(data);
})
.catch(err =>{
    console.log("UH OH ERROR")
    console.log(err)
}) 