//Increment by 10

//Write a for loop that uses a counter variable initialized at 5 and then increments it by 10 every time it executes. 
//Use console.log() to output the value of the counter variable each time through the loop. 
//Stop execution of the loop if the counter variable's value is greater than 120.



for (i = 5; i <= 120; i+=10) {
	var count = "Tens value is " + i + ".";
	console.log(count);
}



//Decrement by division

//Write a for loop with a counter variable initialized at 4096. Each time the loop executes divide the counter variable's value by 2. 
//Use console.log() to output its value every time. When the counter variable's value is 1, stop execution.

for (i = 4096; i >= 1; i/=2) {
	var countdown = "Quotient value is " + i + ".";
	console.log(countdown);
}



//Array iteration

//Create an array that contains the names of American Presidents. 
//Loop over that array with a for loop, and use string concatenation with console.log() to output the order and name of each President (see example below).


var presidents = ['George Washington',
'John Adams',
'Thomas Jefferson',
'James Madison',
'James Monroe',
'John Quincy Adams',
'Andrew Jackson',
'Martin Van Buren',
'William Henry Harrison',
'John Tyler',
'James K. Polk',
'Zachary Taylor',
'Millard Fillmore',
'Franklin Pierce',
'James Buchanan',
'Abraham Lincoln',
'Andrew Johnson',
'Ulysses S. Grant',
'Rutherford B. Hayes',
'James Garfield',
'Chester Arthur',
'Grover Cleveland',
'Benjamin Harrison',
'Grover Cleveland',
'William McKinley',
'Theodore Roosevelt',
'William Howard Taft',
'Woodrow Wilson',
'Warren Harding',
'Calvin Coolidge',
'Herbert Hoover',
'Franklin D. Roosevelt',
'Harry Truman',
'Dwight Eisenhower',
'John F. Kennedy',
'Lyndon Johnson',
'Richard Nixon',
'Gerald Ford',
'Jimmy Carter',
'Ronald Reagan',
'George Bush',
'Bill Clinton',
'George W. Bush',
'Barack Obama',
'an asshole'
];


//for (i=0; i < presidents.length; i++) {
//  var tense = 'was';
//  if (i == presidents.length - 1) {tense = 'is'}
//	var pres = "President # " + (i + 1) + " " + tense + " an " + presidents[i] + ".";
//	console.log(pres);
//}
//
//  Then there's this:

presidents.forEach((president, i) => {
  let tense = (i == presidents.length -1) ? "is" : "was";
  var chiefs = `President # ${i+1} ${tense} an ${presidents[i]}.`;
  console.log(chiefs);
});

//Object iteration

//Use can use another kind of for loop to iterate over objects. 
//Iterate over the object below and use console.log() to output the names of the keys in the object.

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
};

for(var prop in antSpecies) {
	console.log(prop);
}



