"use strict";

var array = [];

var _loop = function _loop(i) {

    array[i] = function () {

        console.log(i);
    };
};

for (var i = 0; i < 10; i++) {
    _loop(i);

    // (function(ii){

    //     array[ii] = function () {

    //         console.log(ii);
    //     };
    // })(i)
}
array[7]();
