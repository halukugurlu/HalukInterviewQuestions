/**
 * Created by halukugurlu on 9/14/14.
 * This document illustrates how prototype chaining works in JavaScript.
 */

function Vehicle(value){

    this.val = value;
}

Vehicle.prototype.get = function fn1() {
    return this.val;
};

function Car(value) {
    Vehicle.call(this, value);
}

Car.prototype = Object.create(Vehicle.prototype); // Here I created a new Vehicle prototype object with its properties, and now it's part of the prototype chain.



var ambulance = new Vehicle("4.8 L");

var passenger = new Car("2.0 L");



console.log(ambulance instanceof Vehicle);  // true  (Here first it looks for Vehicle.prototype property,
                                            // then it looks at ambulance's actual prototype which is the same thing.
                                            // So They both return to the same reference, that's why it returns true).

console.log(ambulance instanceof Car);    // false  (Car's prototype property is not the same as ambulance's
                                          // (recall from the above statement that ambulance's prototype is
                                          // the same as vehicle's), so this time they are not referencing to the same object, therefore returns false).


console.log(passenger instanceof Vehicle);    // true (Here where the chaining comes into action, passenger is instance
                                              // of Vehicle because JavaScript will go up to the prototype chain.
                                              // It will first lookup Vehicle's prototype property, then it will visit
                                              // passenger object's prototype (which is Car.prototype, that's not a match
                                              // but it will go up to the prototype chain and will visit Vehicle.prototype as well,
                                              // eventually will end up having the same object reference therefore will result in true).


