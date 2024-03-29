// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this._timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
  this.vanish();
  console.log('our node = ',this.$node);
};
// use jQuery to create an HTML <span> tag

MakeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this._timeBetweenSteps);
 // setTimeout(this.step.bind(this), this._timeBetweenSteps);
},

MakeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
},
MakeDancer.prototype.vanish = function() {
  //grab the clicked on dom node, focus it and hide the focused
  console.log('our clicked node = ', this.$node[0]);
  $(this.$node).click(function(){
      $(this.$node).focus(function(){
      //  .hide();
    });
  });
};

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body