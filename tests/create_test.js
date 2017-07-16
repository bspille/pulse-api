const assert = require('assert')
const User = require('../models/master')

describe("Create New User", () =>{
    it("Saves a user", (done) =>{
      let jon = new Userf({
        sub: '12345',
        givenName: 'jon',
        familyName: 'son'
      })

      jon.save()
        .then(() => {
          console.log(jon)
          assert(!jon.isNew);
          done()
        })

    })


})