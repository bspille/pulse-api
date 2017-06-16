var User = require("../models/master.js");

var Seed = {
  firstSeed: () => {
    var newUser = new User({
      tokenSub: '1',
      givenName: 'ben',
      familyName: 'spille',
      imageUrl: 'https://www.planwallpaper.com/static/images/maxresdefault1_edrCIjS.jpg',
      contacts: [
        {
        givenName: "chris",
        familyName: "callanjr",
        phoneNumber: "6094406403"
        },
        {
        givenName: "ben",
        familyName: "spille",
        phoneNumber: "6094681411"
        },
        {
        givenName: "greg",
        familyName: "barone",
        phoneNumber: "7327701167"
        },
        {
        givenName: "josh",
        familyName: "butler",
        phoneNumber: "9084158831"
        }
      ]
    });

    // save entry to the db
    newUser.save(function(err, doc) {

      //  Log any errors
       if (err) {
         console.log(err);
       }

       // Or log the doc
       else {
         console.log("####### saved: " + doc);
       }

     }); // save
   }
 }

 module.exports = Seed;
