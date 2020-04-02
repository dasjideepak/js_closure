// Challenge 1
function addTwo(num) {
    return num + 2;
}    
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
    return word + "s";
}
console.log(addS('pizza'));
console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
    let res = [];
	array.forEach(item => res.push(callback(item)));
	return res;
}
console.log(map([1, 2, 3], addTwo));

// Challenge 4
function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  }

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    var result = [];
    array.forEach(element => {
      result.push(callback(element));
    });
    return result;
}

//Extension 2
function reduce(array, c, i) {
    var result = [];
    array.forEach(element => {
        result.push(c(i));
    });
    return result;
}
reduce(["m", "k"], addS, 0);


//Extension 3
function intersection(...arr) {
    return arr.reduce((acc, cv) => {
        acc.forEach((value, index) => {
            if (cv.indexOf(value) == -1) {
                acc.splice(index, 1);
            }
        })
    return acc;
    });
}
console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(...arr) {
    return arr.reduce((acc, cv) => {
    cv.forEach((value) => {
        if (acc.indexOf(value) == -1) {
              acc.push(value);
            }
        })
    return acc;
    });
}
console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(arr1, arr2, cb) {
	let object = {};
	arr1.forEach((item, index) => {
		if (cb(item) == arr2[index]) {
			object[item] = arr2[index];
		}
	});
	return object;
}
console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arr, arrFn) {
	let object = {};
	arr.forEach((value, index) => {
		let array = [];
		arrFn.forEach(cb => {
			array.push(cb(value));
		});
		object[value] = array;
	});
	return object;
}
console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }