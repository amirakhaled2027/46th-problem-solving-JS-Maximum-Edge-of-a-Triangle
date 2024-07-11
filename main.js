//Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

//s1 + s2 – 1

function maxRangeOfTri(side1, side2) {
    return (side1 + side2) - 1;
}

console.log(maxRangeOfTri(8 ,10 ));
console.log(maxRangeOfTri(5 ,7 ));
console.log(maxRangeOfTri(9 ,2 ));