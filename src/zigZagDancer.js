var ZigZagDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
 // this.$node = $('<span class="zig"></span>');
 // this.color = "#26DD57";
 // console.log();
};

ZigZagDancer.prototype = Object.create(MakeDancer.prototype);
ZigZagDancer.prototype.constructor = ZigZagDancer;

ZigZagDancer.prototype.zag = function() {
  console.log("Here is the node: ", this.$node);

  MakeDancer.prototype.step.call(this);
  TweenMax.to(this.$node, 0.5, {y: "+=250", delay: 0.2, ease: Power2.easeInOut});
  TweenMax.to(this.$node, 0.5, {y: "-=250", x: "-=300", delay: 0.7, ease: Power2.easeInOut});
  TweenMax.to(this.$node, 0.5, {y: "+=250", delay: 1.2, ease: Power2.easeInOut});
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