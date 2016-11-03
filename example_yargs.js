
var argv = require('yargs')
    .command('adduser', 'Greets the user', function (yargs) {
        yargs.options({
            name: {
                demand: true,
                alias: 'n',
                description: 'Your first name goes here',
                type: 'string'
            },
            lastname: {
                demand: true,
                alias: 'l',
                description: 'Your last name goes here',
                type: 'string'
            },
			cityname:{
				demand:false,
				alias:'c',
				description:'Your city name',
				type:'string'
			},
			statename:{
				demand:true,
				alias:'s',
				description:'Your State name',
				type:'string'
			}
        }).help('help');
    })
     
    .help('help')
    .argv;
var command = argv._[0];
 
console.log(argv);
 
if (command === 'adduser' && typeof argv.name !== 'undefind' && typeof argv.lastname !== 'undefined' && typeof argv.cityname !== 'undefind' && typeof argv.statename !== 'undefind') {
    console.log('Hello ' + argv.name + ' ' + argv.lastname + '!' +'. The City '+ argv.cityname + ' belong to ' + argv.statename +' state');  
} else if (command === 'adduser' && typeof argv.name !== 'undefined') {
    console.log('Hello ' + argv.name + '!');
} else if (command === 'adduser') {
    console.log('Hello world!');
}
 