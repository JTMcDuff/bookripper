/*
	Accepts the name of a .json file.
	Iterates through the file.
		Makes all strings html-friendly
		Recurses into lower data structures to find strings
	*** Makes changes in place *** 

	Usage:
	node index.js < file name >
*/

const fs = require('fs'); 
const fileName = process.argv[2];
const file = require('./'+fileName);

console.log('file', file);
file[1] = 'I have been changed';

fs.writeFile( fileName, JSON.stringify(file), (err)=> {
	if (err) { console.log(err); }
	console.log('Writing to' + fileName );
});


