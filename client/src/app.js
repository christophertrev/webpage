$(function(){
  
  // var messages = new Messages();
  // messages.fetchMessages();
  // view = new MessagesView({el: $('.chatWindow'), collection: messages})
  // view.render();
  // view = new ProjectView({el:$('.features')})
  var project = new ProjectModel();
  var view = new ProjectView({model: project})
  $('.features').append(view.render());



});