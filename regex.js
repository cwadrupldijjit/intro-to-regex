/* 
// constructed:
new RegExp(`\\s${variable}@\\|`, 'i' + 'g')

// literal
/\D/i
 */

// const input = document.createElement('input');
// const inputValue = 'mr-e@examplE.com'; // SHOULD SUCCEED
// const inputValue = '@examplE.com'; // FAILS! :)
// const inputValue = 'mr-e@.com'; // FAILS! :)
// const inputValue = 'mr-e@example.'; // FAILS! :)
const inputValue = 'mr-e@example-com'; // FAILS! :)
// const inputValue = '';

// const dateString = '2019-03-09';

// dateString.match(/[0-9]{4}-\d{1,2}-[0-9]{1,2}/);
// \d - 0-9 (same as writing "[0-9]")
// \D - anything but number characters (same as writing "[^0-9]")
// \w - all (latin) characters and (arabic) numbers
// \W - anything but alphanumeric characters
// \s - any space character (space, tab, vertical tab, newlines, carriage returns, etc.)
// \S - anything but space characters

// const matchValue = inputValue.match(/[\w\-_]+@[\w\-_]+\.[a-z]+/i);
const matchValue = /[\w\-_]+@[\w\-_]+\.[a-z]+/i.exec(inputValue);

// let isAtSymbolFound = false;
// let isPeriodFound = false;
// let isUsingInvalidCharacter = true;

// for (let i = 0; i < inputValue.length; i++) {
// 	const char = inputValue[i];

// 	if (char == '@') {
// 		isAtSymbolFound = true;
// 	}
// 	if (char == '.') {
// 		isPeriodFound = true;
// 	}
//  // etc........
// }

if (matchValue) {
	console.log('😊 email is valid');
}
else {
	console.warn('😒 email is invalid');
}


/*
// constructed:
new Object();

// vs literal
var obj = {
	//

	
};

// constructed:
new Array(1, 1, 'foo');

// vs literal
var arr = [];
*/
