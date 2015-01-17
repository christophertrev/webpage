window.onload=function(){



  function rssfeedsetup(){
    var feedpointer=new google.feeds.Feed(feedurl); //Google Feed API method
    feedpointer.setNumEntries(feedlimit); //Google Feed API method
    feedpointer.load(displayfeed); //Google Feed API method
  }

  function displayfeed(result){
    if (!result.error){
      var thefeeds=result.feed.entries;
      console.log(thefeeds)
      for (var i=0; i<thefeeds.length; i++)
        rssoutput+="<header><h4><a href='" + thefeeds[i].link + "'>" + thefeeds[i].title + "</a></h4><p>"+ (new Date(thefeeds[i].publishedDate)).toLocaleDateString() +"</p></header><p>"+ thefeeds[i].contentSnippet+"</p>";
        // rssoutput+="";
        // console.log('rssoutput', rssoutput)
        feedcontainer.innerHTML = rssoutput;
    }
    else{
      alert("Error fetching feeds!");
    }
  }


  var feedcontainer=document.getElementById("rssFeed");
  var feedurl="http://waitwhat.azurewebsites.net/rss/";
  var feedlimit=5;
  // var rssoutput="<h3>Most Recent Blog Posts</h3><br />";
  var rssoutput="";
  rssfeedsetup();
}


// <header>
//   <h4>Heading with a Subtitle</h4>
//   <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
// </header>
// <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>