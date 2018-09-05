var BouncyDancer = function(top, left,timeBetweenSteps){
    MakeDancer.call(this,top, left, timeBetweenSteps);
    this.$node = $('<span class="bouncy"></span');
    this.setPosition(top, left);
    this.bounce();
};
BouncyDancer.prototype = Object.create(MakeDancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.bounce = function(){
  var t2 = new TimelineMax({repeat: -1, repeatDelay:0.25});
    t2.to(this.$node, 0.575, {y: 160, repeat: -1, yoyo: true, ease: Power1.easeIn});
    t2.to(this.$node, 10, {x: "+=1600", repeat: -1, yoyo: true});
    t2.to(this.$node, 10, {x: "-=1600", repeat: -1, yoyo: true});
};
