var ProjectView = Backbone.View.extend({
  // <article>
  //   <a href="#" class="image"><img src="images/pic01.jpg" alt="" /></a>
  //   <div class="inner">
  //     <h4>Stroll Health - Patient Portal</h4>
  //     <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.</p>
  //   </div>
  // </article>

  /*
  picturesSrc
  title
  description
  */

  tagName: 'article',
  initialize: function (){

  },

  render: function (){
    return this.$el.append('<article> hellooooooo</article>')
  }

})