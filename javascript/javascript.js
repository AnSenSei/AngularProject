var x = [3,5,10,-4,2]
var y =x.map(function(elt, index, array){return elt+index});
var z = y.reduce(function(a,b){return b-a})
console.log(z)