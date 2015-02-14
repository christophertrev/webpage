var ProjectView = Backbone.View.extend({

   template: _.template(' <a href="<%= link =%>" class="image"><img src="<%= imgSRC %>" alt="" /></a>'+
    '<div class="inner">' +
      '<h4><%= title %></h4>' +
      '<p><%= description%></p>' +
    '</div>'),

  tagName: 'article',
  initialize: function (){
    // console.log(this.model)

  },

  render: function (){
    return this.$el.html(this.template(this.model.attributes))
  }

})