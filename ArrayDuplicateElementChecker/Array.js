/**
 * Created by halukugurlu on 9/14/14.
 * This document illustrates how to find duplicate values in an array.
 */

var myArray = [3, 2, 2, 82, 1, 33, 82, 3, 64, 23, 15, 1, 64];

var sortedArray = myArray.sort(function(a, b) {     //  The array elements are sorted in numerically
                                 return a - b;      //  in order to compare indexes that contain
                               });                  //  the same values.

console.log(sortedArray); // The sorted index of the Array

var results = [];
for (var i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] == sortedArray[i + 1]) {
        results.push(sortedArray[i]);
    }
}

console.log(results); //  The duplicate values in the Array -> 1 , 2 , 3 , 64 , 82