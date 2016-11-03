var argv1 = require('yargs').argv;
var command = argv1._[0];



console.log(argv1);

if (command === 'hello' && typeof argv1.fname !=='undefined' && typeof argv1.lname != 'undefined'){
	console.log('Hello '+ argv1.fname +' ' + argv1.lname);
	
	
}
else if (command === 'hello' && typeof argv1.fname !== 'undefined')
{
	console.log ('Hello ' + argv1.fname);
}
else if (command === 'hello' && typeof argv1.lname != 'undefined')
{
	console.log ('Hello ' + argv1.lname);
}
else if (command === 'hello'){
	console.log('Hello World!');
}