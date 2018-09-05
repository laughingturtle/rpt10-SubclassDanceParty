var ZigZagDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="zig"></span>');
  this.setPosition(top,left);
  this.zag();
};

ZigZagDancer.prototype = Object.create(MakeDancer.prototype);
ZigZagDancer.prototype.constructor = ZigZagDancer;

ZigZagDancer.prototype.zag = function() {
  // MakeDancer.prototype.step.call(this);
  // var t1 = new TimelineMax({});
  console.log("Hi, I'm the node: ", this.$node)
  var t1 = new TimelineMax({repeat: -1, repeatDelay:0.25});
  t1.to(this.$node, 0.25, {x: "+=250", delay: 0, ease: Power2.easeInOut});
  t1.to(this.$node, 0.25, {x: "-=250", y: "-=150", delay: 0, ease: Power2.easeInOut});
  t1.to(this.$node, 0.25, {x: "+=250", delay: 0, ease: Power2.easeInOut});
  t1.to(this.$node, 0.25, {x: "-=250", delay: 0, ease: Power2.easeInOut});
  t1.to(this.$node, 0.25, {x: "+=250", y: "+=150", delay: 0, ease: Power2.easeInOut});
  t1.to(this.$node, 0.25, {x: "-=250", delay: 0, ease: Power2.easeInOut});
};

// MakeDancer.prototype.setColor = function(color) {
//   // Use css top and left properties to position our <span> tag
//   // where it belongs on the page. See http://api.jquery.com/css/
//   //
//   var styleSettings = {
//     color: color
//   };
//   this.$node.css(styleSettings);
// };