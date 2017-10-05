'use strict';
var events = require('events');

class DoorClass {
    constructor(name)
    {
        events.EventEmitter.call(this);
        this.name = name;
    }

    onOpen(){
        this.emit('onOpen');
        
    }

    open(){
        console.log(this.name + ' open');
        this.onOpen();
    }
}

DoorClass.prototype.__proto__ = events.EventEmitter.prototype;

module.exports = DoorClass;
