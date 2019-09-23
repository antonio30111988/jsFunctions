// repeat array n times
function repeat(array, n = 3 ) {
    var repeatedArray = [];
    while (n--) Array.prototype.push.apply(repeatedArray, array);
    return repeatedArray;
}

// reformat string to exclude vowels and only first letter to be uppercase
function reformat(string) {
    return (string.charAt(0).toUpperCase() + string.toLowerCase().substring(1)).split('').filter(function (el) {
        return ['a', 'e', 'i', 'o', 'u'].indexOf(el.toLowerCase()) == -1;
    }).join('');
}

// return array representation of a next Binary number of a Binary number array set as input function param
function next_binary_number(array) {
   var l = array.length;
    for (var i = l - 1; i >= 0; i--) {
        if (array[i] == '0')
        {
            array[i] = '1';
            break;
        }
        else {
            array[i] = '0';
        }
    }
    if (i < 0) {
        array.unshift('1');
    }
    return array;

}

console.info("EXPAND ARRAY 3 TIMES:");
console.log(repeat([1, 2, 3]));

console.info("FILTER STRING \"BeMEir DeveLoper TEST\" WITHOUT VOWELS AND MAKE 1st CHARACTER UPPERCASE:");
console.log(reformat("BeMEir DeveLoper TEST"));

console.info("DISPLAY NEXT BINARY REPRESENTATION OF BINARY NUMBER:");

console.log(next_binary_number([1,0,0,0,0,0,0,0,0,1]));
console.log(next_binary_number([1,1]));
console.log(next_binary_number([1,0]));
console.log(next_binary_number([1,1,0]));


