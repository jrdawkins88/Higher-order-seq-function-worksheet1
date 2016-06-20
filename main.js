//Higher-order Sequencing Functions Worksheet
//Part 1
//Exercise 1.1
function forEach (array, callback) {
	for (var i = 0; i < array.length; i++) {
		callback(array[i]);
	}
};
//Exercise 1.2
function map (array, callback) {
	var result = [];

	for (var i = 0; i < array.length; i++) {
		result[i] = callback(array[i]);
	}

	return result;
};
//Exercise 1.3
function reduce (array, callback) {
	var result = array[0];
	for (var i = 1; i < array.length; i++){
		result = callback(result, array[i]);
	}
	return result;
};
//Exercise 1.4
function filter (array, callback) {
	var result = [];
	for (var i = 0; i < array.length; i++) {
		if (callback(array[i])) {
			result[result.length] = array[i];
		}
	};
	return result;
};
//Exercise 1.5
function sum () {
	var s = 0; 
	for (var i = 0; i < arguments.length; i++) {
		s += arguments [i];
	}
	return s;
}

//Part 2
//Data to complete exercises for part 2
var products = [
    {
        name: 'Pita bread (white)',
        price: 7.5,
        category: 'food'
    },
    {
        name: 'Denim jeans',
        price: 22.95,
        category: 'apparel'
    },
    {
        name: 'Bicycle playing cards',
        price: 5,
        category: 'novelties'
    },
    {
        name: 'Red/blue plaid button-down',
        price: 23.95,
        category: 'apparel'
    },
    {
        name: 'Bic lighter',
        price: 3,
        category: 'novelties'
    },
    {
        name: 'Greek yogurt (strawberry)',
        price: 2.25,
        category: 'food'
    },
    {
        name: 'Organic eggs (dozen)',
        price: 6,
        category: 'food'
    }
];

// // Exercise 2.1 
function avgCat(category, price) {
	var filtered = filter(products, function (item) {
		return item.category === category;
	});

	var prices = map(products, function (item) {
		return item.price;
	});

	function add(x, y){
		return x + y;
	}

	return reduce(prices, add) / prices.length;
}



// // // Exercise 2.2

// function productTemplate(product) {
// 	return '<li>' + product.name + ' - $' + product.price + '</li>';
// }

// // {
// //     name: 'Pita bread (white)',
// //     price: 7.5,
// //     category: 'food'
// // }	
// console.assert(productTemplate(products[0]) === '<li>Pita bread (white) - $7.5</li>');

// function render(products) {
// 	var listItems = map(products, productTemplate);
// 	var listItemsJoined = reduce(listItems, function(a, b) {
// 		return a + b;
// 	});
// 	return '<ul>' + listItemsJoined + '</ul>';
// }

// var filtered = filter(products, function (product) {
// 	return product.price < 5;
// });

// console.assert(render(filtered) === '<ul><li>Bic lighter - $3</li><li>Greek yogurt (strawberry) - $2.25</li></ul>');

