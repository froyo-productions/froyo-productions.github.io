var width = window.innerWidth;
var height = window.innerHeight;

console.log(width, height);
console.log(typeof(height));

// have no choice but to make full square that someone scales with height
// var rowSquares = 3;
// var colSquares = 2;
var squareCount = Math.round(Math.max(height, width) / 33);
// var squareCount = Math.round((height) / 35);
console.log(squareCount);
var genUL = $(document.createElement('ul'));
genUL.attr('style', '--square-count:' + squareCount)
    // $(genUL).addClass('row-cols');
$(genUL).addClass('tile');

// ul(style = '--square-count:' + squareCount) 
var i = 0;
while (i < squareCount) {
    var j = 0;
    while (j < squareCount) {
        // li(style = '--animation-order:' + (j + i))
        var genLI = $(document.createElement('li'));
        genLI.attr('style', '--animation-order:' + (j + i));
        $(genLI).addClass('tile');
        genUL.append(genLI);
        j++;
    }
    $(headercontainer).append(genUL);
    i++;
}