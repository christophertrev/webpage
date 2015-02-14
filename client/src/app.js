

$(function(){
  var messages = new Messages();
  messages.fetchMessages();
  view = new MessagesView({el: $('.chatWindow'), collection: messages})
  view.render();
});