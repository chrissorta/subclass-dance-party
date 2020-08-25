var movingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.oldStep = makeDancer.prototype.step;
  //make a function invocation to move
  //this.$node = $('<span class="movingDancer"></span>');
  this.$node.addClass('movingDancer');


};

movingDancer.prototype = Object.create(makeDancer.prototype);
movingDancer.prototype.constructor = movingDancer;

movingDancer.prototype.step = function() {

  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var moveTop = (Math.random() - .5) * 25;
  var moveLeft = (Math.random() - .5) * 25;
  this.top += moveTop;
  this.left += moveLeft;

  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

