const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

before((done)=> {
    mongoose.connect("mongodb://localhost/pulse");
    mongoose.connection
        .once("open", () => {
            done();
            console.log("Mongoose connection successful.");
        })
        .on("error", (error) => {
            console.log("Mongoose Error: ", error);
        })
});
beforeEach(done){
    mongoose.connection.collections.User.drop()
    done()
}