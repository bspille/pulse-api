const assert = require('assert')
const User = require('../models/master')

descriprion("find a user in the collection", ()=>{
    let jon;

    beforeEach((done)=>{
        jon = new User({
            sub: '12345',
            givenName: 'jon',
            familyName: 'son'
        })
        jon.save()
            .then(()=>{
                done();
            })
    })
    it("it can find a user in the collection with sub: 12345", (done) =>{
        User.find({sub: '12345'})
            .then((user)=>{
                console.log(user);
                assert(user._id.toString() === jon._id.toString())

                done();

            })
    })
})