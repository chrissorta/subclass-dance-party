var resizingDancer = function(top, left, timeBetweenSteps) {
  movingDancer.call(this, top, left, timeBetweenSteps);
  //this.oldStep = makeDancer.prototype.step;
  //make a function invocation to move
  //this.$node = $('<span class="movingDancer"></span>');
  this.$node.removeClass('movingDancer');
  this.$node.addClass('resizingDancer');


};

resizingDancer.prototype = Object.create(movingDancer.prototype);
ResizingDancer.prototype.constructor = movingDancer;

resizingDancer.prototype.step = function() {

  movingDancer.prototype.step.call(this);


};

