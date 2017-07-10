// TODO: master timer to query the collections looking for past due timeSet
const crud = require("./crud.js")
let MIA;
const timer = {
  // run this.query every 5 minutes
  run(){
    MIA = setInterval(this.query, 300000)
  },

  stop(){
    clearInterval(MIA)
  },

  query (){
    let date = Date.now()
    let query = {timeSet: {$lte: date}};
    crud.read(query, (result) =>{
      console.log("these timeSets are past due " +JSON.stringify(results, null, 1));
    });
  }

}
module.exports = timer;
