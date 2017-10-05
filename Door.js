//door.js
var events = require('events');

var Door = function(colour) {
  this.colour = colour;
  events.EventEmitter.call(this);


  this.onOpen = function()
  {
     this.emit('onOpen');
  }

  this.open = function(){
    console.log('open');
    this.onOpen();
  }

}
 

Door.prototype.__proto__ = events.EventEmitter.prototype;

module.exports = Door;
