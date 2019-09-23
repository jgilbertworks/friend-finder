const friends = require('../data/friends.js');

module.exports = function(app) {
    // return all friends in the array
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        // res.json(friends);
        // console.log(req.body.scores);
        let user = req.body;

        for (let index = 0; index < user.scores.length; index++) {
            user.scores[index] = parseInt(user.scores[index]);
        }
    });

    //   let user = req.body;

    //   for (let index = 0; index < user.scores.length; index++){
    //       user.scores[index] = parseInt(user.scores[index]);
    //   }

    let matchIndex = 0;
    let least = 50;

    for (let index = 0; index < friends.length; index++) {

        let total = 0;

        for (let j = 0; j < friends[index].scores.length; j++) {
            let subtract = Math.abs(user.scores[index] - friends[index].scores[j]);
            total += subtract;
        }

        if (total < least) {
            matchIndex = index;
            least = total;
        }
    }

    friends.push(user);
    res.json(friends[matchIndex]);

}