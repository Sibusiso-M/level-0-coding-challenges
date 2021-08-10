function triangleArea(side1, side2, side3) {
    var semiperimeter = 0.5 * (side1 + side2 + side3); // Calculate the semiperimeter of the triangle. 
    var area = Math.sqrt(semiperimeter * ((semiperimeter - side1) * (semiperimeter - side2) * (semiperimeter - side3))); //Apply Heron’s formula

    return area;
}

console.log(triangleArea(5, 6, 6));