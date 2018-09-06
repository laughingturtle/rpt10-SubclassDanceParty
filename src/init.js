$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    console.log('DMFN = ', dancerMakerFunctionName)
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);



    $(".btn").click(function(){
      console.log(window.dancers);
        var currDancers = window.dancers;

        for(var i = 0; i < currDancers.length; i++){
         // console.log('current dancer = ', currDancers[i].$node[0]);

         // something like this
         // TweenMax.to(currDancers[i].$node, 0.75, {top: '50px', ease:Quad.easeOut});

         // hard coded version
         TweenMax.to(".heart", 0.75, {top: '50px', ease:Quad.easeOut});
         TweenMax.to(".dancer", 0.75, {top: '50px', ease:Quad.easeOut});
         TweenMax.to(".zig", 0.75, {top: '50px', ease:Quad.easeOut});
         TweenMax.to(".bouncy", 0.75, {top: '50px', ease:Quad.easeOut});
      }
    });
  });
});



