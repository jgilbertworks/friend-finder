// const friends = require('../data/friends.js');

// module.exports = function(app) {
//     // return all friends in the array
//     app.get('/api/friends', function (req, res) {
//         res.json(friends);
//     });

//     app.post('/api/friends', function (req, res) {
//         // res.json(friends);
//         // console.log(req.body.scores);
//         let user = req.body;

//         for (let index = 0; index < user.scores.length; index++) {
//             user.scores[index] = parseInt(user.scores[index]);
//         }
//     });

//     //   let user = req.body;

//     //   for (let index = 0; index < user.scores.length; index++){
//     //       user.scores[index] = parseInt(user.scores[index]);
//     //   }

//     let matchIndex = 0;
//     let least = 50;

//     for (let index = 0; index < friends.length; index++) {

//         let total = 0;

//         for (let j = 0; j < friends[index].scores.length; j++) {
//             let subtract = Math.abs(user.scores[index] - friends[index].scores[j]);
//             total += subtract;
//         }

//         if (total < least) {
//             matchIndex = index;
//             least = total;
//         }
//     }

//     friends.push(user);
//     res.json(friends[matchIndex]);

// }
let friends = require("../data/friends.js")

module.exports = function(app){

app.get("/api/friends",function(req,res){
    res.json(friends)
})

app.post("/api/friends",function(req,res){
    let newUser = req.body


    for(let i = 0; i<newUser.scores.length; i++){
        newUser.scores[i] = parseInt(newUser.scores[i])
    };

    let currentMatch = 0;
    let minimumDiff = 50;

    for(let i = 0; i<friends.length;i++){
        
        let totalDiff = 0;

        for(let j = 0; j<friends[i].scores.length;j++){
            let currentDiff = Math.abs(newUser.scores[j]-friends[i].scores[j])
            totalDiff += currentDiff
        }

        if(totalDiff<minimumDiff){
            currentMatch = i
            minimumDiff=totalDiff
        }
    }
    
    friends.push(newUser)

    res.json(friends[currentMatch])
    
})




}