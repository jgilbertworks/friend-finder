let friendsArray = require('../data/friendsArray.js');

module.exports = function(app){
// return all friends in the array
    app.get('/api/survey', function(req, res) {
        res.json(friendsArray);
      });

      app.post('/api/survey',function(req,res){
          res.json(friendsArray);
          console.log(req.body.scores);
      });

      let user = req.body;

      for (let index = 0; index < user.scores.length; index++){
          user.scores[index] = parseInt(user.scores[index]);
      }

    let matchIndex = 0;
    let least = 50;

    for (let index = 0; index < friendsArray.length; index++){
        let total = 0;
        for (let j = 0; j < friendsArray[index].scores.length; j++){
            let subtract = math.abs(user.scores[index] - friendsArray[index].scores[j]);
            total += subtract;
        }

        if(total < least){
            matchIndex = index;
            least = total;
        }
    }

    friendsArray.push(user);
    res.json(friendsArray[matchIndex]);

}