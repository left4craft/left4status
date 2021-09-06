const functions = require('firebase-functions');

module.exports = context => {
	functions.config().pterodactyl.host
	functions.config().pterodactyl.key
	console.log('This will be run every 3 minutes!');
	return null;
};