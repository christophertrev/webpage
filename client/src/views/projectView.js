var ProjectView = Backbone.View.extend({
  // <article>
    // <a href="#" class="image"><img src="images/pic01.jpg" alt="" /></a>
    // <div class="inner">
    //   <h4>Stroll Health - Patient Portal</h4>
    //   <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.</p>
    // </div>
  // </article>

  /*
  picturesSrc
  title
  description
  */
   template: _.template('    <a href="#" class="image"><img src="<%= imgSRC %>" alt="" /></a>'+
    '<div class="inner">' +
      '<h4><%= title %></h4>' +
      '<p><%= description%></p>' +
    '</div>'),

  tagName: 'article',
  initialize: function (){
    // console.log(this.model)

  },

  render: function (){
    // return this.$el.append('hellooooooo</article>')
    return this.$el.html(this.template(this.model.attributes))
    // return this.$el.html('hellooo This should be in an article')
  }

})