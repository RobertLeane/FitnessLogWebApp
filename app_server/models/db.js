const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://loc8r_admin:kfnc8mSnNHXMts28@loc8r.t667etg.mongodb.net/?retryWrites=true&w=majority&appName=Loc8r';
    try {
        mongoose.connect(
            dbURI,
            { useNewUrlParser: true, useUnifiedTopology: true }).then(
            () => {console.log(" Mongoose is connected")},
            err=> {console.log(err)}
        );
    }
    catch (e) {
        console.log("could not connect");
    }
    require('./locations');