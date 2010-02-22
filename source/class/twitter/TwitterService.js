qx.Class.define("twitter.TwitterService", 
{
  extend : qx.core.Object,

  properties : {
    tweets : {
      nullable: true,
      event: "changeTweets"
    }
  },
  
  
  events : {
    "postOk" : "qx.event.type.Event"
  },
  

  members :
  {
    __store : null,
    
    
    fetchTweets : function() {
      if (this.__store == null) {
        var url = "http://twitter.com/statuses/friends_timeline.json";
        this.__store = new qx.data.store.Jsonp(url, null, "callback");        
        this.__store.bind("model", this, "tweets");
      } else {
        this.__store.reload();
      }
    },
    
    
    post : function(message, username, password) 
    {
      var query = "use 'http://www.yqlblog.net/samples/twitter.status.xml';" + 
                  "insert into twitter.status (status,username,password)" + 
                  "values ('" + message + "', '" + username + "', '" + password + "')";

      var store = new qx.data.store.Yql(query, null, true);
      store.addListener("loaded", function(e) {
        var model = e.getData();
        try {
          var returnedText = model.getQuery().getResults().getStatus().getText();
          // seems like everything is ok
          if (returnedText == message) {
            this.fireEvent("postOk");
          }
        } catch (e) {
          try {
            alert(model.getError().getDescription());
          } catch (e) {
            alert("Could not post."); 
          }
        }
      }, this);
    }
  }
});
