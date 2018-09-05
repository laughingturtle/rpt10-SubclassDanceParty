var MakeHeartDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<div class="heart"></div>');
  // this.$node = $('<div class="heartContainer"><span class="heart"></span></div>');
  this.setPosition(top, left);
  this.throb();
};
MakeHeartDancer.prototype = Object.create(MakeDancer.prototype);
MakeHeartDancer.prototype.constructor = MakeHeartDancer;

MakeHeartDancer.prototype.throb = function() {
  console.log("Hi, I'm the node: ", this.$node);
  TweenMax.to(this.$node, 0.75, {scale:3, repeat: -1, yoyo: true, ease:Bounce.easeOut});
 // TweenMax.to(this.$node, 0.2, {scale:1, delay:0.4});
};