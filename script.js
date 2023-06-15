// answer1//

function counter() {
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());

// answer2//
let count = 0;
(function () {
    if (count === 0) {
        let count = 1;
        console.log(count);
    }
    console.log(count);
})();


// answer 3//
for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
        console.log(i); // What is logged?
    }, 1000);
}

// answer4//
function calculateRectangleArea(length) {
    function innerFunction(breadth) {
        return length * breadth;
    }
    return innerFunction;
}
// use//
const rectangleArea = calculateRectangleArea(9);
const area = rectangleArea(9);
console.log(area);

// answer5//
function createCounter() {
    let counter = 0;
    function increaseCounter() {
        counter++;
        console.log(counter);
    }
    return increaseCounter;
}
// use//
const counter = createCounter();
counter();
counter();
counter();

// answer6//
var a = 12;
(function () {
    alert(a);
})();

// answer 7//
var a = 10;
var x = (function () {
    var a = 12;
    return function () {
        alert(a);
    };
})();
x();

//answer8//
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';

    (function innerFunc(innerArg) {
        var innerVar = 'b';

        console.log(
            "outerArg = " + outerArg + "\n" +
            "innerArg = " + innerArg + "\n" +
            "outerVar = " + outerVar + "\n" +
            "innerVar = " + innerVar + "\n" +
            "globalVar = " + globalVar);

    })(456);
})(123);
