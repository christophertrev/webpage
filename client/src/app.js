$(function(){
  
  var features = new FeatureProjects([{},{},{}]);
  var projectViews = new ProjectsView({collection: features})
  $('.projects').append(projectViews.render());

});