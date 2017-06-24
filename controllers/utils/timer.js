// TODO: master timer to query the collections looking for past due timeSet
var crud = require("./crud.js"),
    timer = {
      // run this.query every 5 minutes
      run(){setInterval(this.query, 300000)}

      query(){
        var date = Date.now(),
        query = {timeSet: date};
        crud.read(query, (result) =>{
          console.log("these timeSets are past due " +
            JSON.stringify(results, null, 1));
        });
        }

    }
module.exports = timer;
