const assert = require('assert')
const request = require('supertest')

// bring in the app that has a route associated with it
const app 

describe("can handle http requests", ()=>{
    it("Can get a index", (done)=>{
        request(app)
            .get('/get')
            .end((err, response)=>{

            })
    })
})