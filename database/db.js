const mongoose = require('mongoose');

/**
 * Creating connection in Mongo Database
 */
const conectToDb = () => {
    mongoose.connect(
        'mongodb+srv://root:admin@todolist.yme9c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log('MongoDB Atlas is Connected'))
    .catch(error => console.log(error));
};

module.exports =  conectToDb;