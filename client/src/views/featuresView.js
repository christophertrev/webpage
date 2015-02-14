var ProjectsView = Backbone.View.extend({
  // tagName: 'div',
  initialize: function(){
    console.log(this.collection)
    this.$el.addClass('features')
  },
  render: function(){
    var a = this.collection.map(function(project){
      // console.log(project)
      return new ProjectView({model: project}).render();
    })
    console.log(a)
    return this.$el.append(a)
  }
})