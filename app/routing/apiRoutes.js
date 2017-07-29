var friends= require("../data/friends.js");

module.exports=function(app){

    app.get("/api/friends",function(req,res){
      res.json(friends);
    });

    app.post("/api/friends/:gender",function(req,res){
      var reqFriends;
      switch(req.params.gender){
        case "Man" : reqFriends=friends.males;break;
        case "Woman" : reqFriends=friends.females;break;
        default:reqFriends=friends.females.concat(friends.males);
      }
      var user=req.body;

      if( user.name==undefined || user.scores.length <10 )
        res.jason({nam:"nobody",photo:"",scores:[0]});

      var scorediff=0;
      var recordScore=-1;
      var friendIndex;
      for (i=0;i<reqFriends.length;i++){
        scorediff=0;

        for(j=0;j<10;j++){
          if(user.scores[j]!=reqFriends[i].scores[j])
            scorediff=scorediff+Math.abs(user.scores[j]-reqFriends[i].scores[j]);    
          }        

           if(scorediff<recordScore || recordScore==-1){
            recordScore=scorediff;
            friendIndex=i;
        }
          
      }

      res.json(reqFriends[friendIndex]);
    });

}