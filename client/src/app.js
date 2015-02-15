$(function(){
  
  var projects = [
  {
    title: 'Stroll Health - Patient Portal',
    imgSRC: 'images/webpaget.png',
    description: 'A web & mobile  app to allow patients for search for most affordable location of doctor prescribed procedure. Made in collaboration with Stroll Health',
    link: '#'
  },
  {
    title: "'strom",
    imgSRC: 'images/storm.png',
    description: 'A web application that allows users to brain storm anonymously',
    link: 'http://unstable-asteroid.azurewebsites.net/'
  },
  {
    title: 'Drawn Together',
    imgSRC: 'images/drawnLogo.png',
    description: 'A game that allows user to draw head to head against a friend',
    link: 'https://fast-plateau-6652.herokuapp.com/'
  },
  ]


  var features = new FeatureProjects(projects);
  var projectViews = new ProjectsView({collection: features})
  $('.projects').append(projectViews.render());

});

// <article>
//   <a href="#" class="image"><img src="images/pic01.jpg" alt="" /></a>
//   <div class="inner">
//     <h4>Stroll Health - Patient Portal</h4>
//     <p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.</p>
//   </div>
// </article>
