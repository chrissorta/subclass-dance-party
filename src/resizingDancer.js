var resizingDancer = function(top, left, timeBetweenSteps) {
  movingDancer.call(this, top, left, timeBetweenSteps);
  //this.oldStep = makeDancer.prototype.step;
  //make a function invocation to move
  //this.$node = $('<span class="movingDancer"></span>');
  this.$node.removeClass('movingDancer');
  this.$node.removeClass('dancer');
  this.$node.addClass('resizingDancer');


};

resizingDancer.prototype = Object.create(movingDancer.prototype);

resizingDancer.prototype.constructor = movingDancer;



resizingDancer.prototype.step = function() {

  movingDancer.prototype.step.call(this);

  var newWidth = (Math.random() + 1) * 40;
  var newHeight = (Math.random() + 1) * 40;

  var styleSettings = {
    height: newHeight,
    width: newWidth,
  };

  this.$node.css(styleSettings);

};

