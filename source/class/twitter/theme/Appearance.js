/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

qx.Theme.define("twitter.theme.Appearance",
{
  extend : qx.theme.modern.Appearance,

  appearances :
  {
    "tweet-view" : {},
    
    "tweet-view/time" : {
      style : function() {
        return {
          textColor: "tweet-time"
        }
      }
    }
  }
});