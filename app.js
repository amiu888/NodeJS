var Door = require('./door.js');
var DoorClass = require('./DoorClass.js');

var events = require('events');
var eventEmitter = new events.EventEmitter();


// var ringBell = function ringBell()
// {
//   console.log('ring ring ring');
// }
// eventEmitter.on('doorOpen', ringBell);

// eventEmitter.emit('doorOpen');

// doSomething = function(){ 
//     console.log('doSomething');
// }

// doSomethingElse = function(){ 
//     console.log('doSomethingElse');
// }

var frontDoor = new DoorClass('Afonso');

frontDoor.on('onOpen', function() {
    console.log(' ring ring ' + this.name );
  });
frontDoor.open();
// eventEmitter.on('doorOpen', ringBell);
// eventEmitter.on('doorOpen', doSomething);
// eventEmitter.on('doorOpen', doSomethingElse);

// eventEmitter.emit('doorOpen');

