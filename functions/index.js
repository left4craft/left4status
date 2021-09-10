require('dotenv').config();
const functions = require('firebase-functions');
const config = functions.config();

const isReachable = require('is-reachable');
const services = require('../services.json');
const tps_regex = /\[\d{2}:\d{2}:\d{2} INFO\]: TPS from last 1m, 5m, 15m: (?<tps1>\S+), (?<tps5>\S+), (?<tps15>\S+)/gm;

const admin = require('firebase-admin');
const service_account = require('./key.json');
admin.initializeApp({
	credential: admin.credential.cert(service_account),
	databaseURL: 'https://l4c-status-default-rtdb.firebaseio.com'
});

// https://firebase.google.com/docs/functions/write-firebase-functions
module.exports.check = functions.pubsub.schedule('every 2 minutes').onRun(() => {
	// module.exports = admin => functions.https.onRequest((request, response) => {
	console.log('Running status check');
	const db = admin.database();

	const HOST = config.pterodactyl?.host || process.env.PTERO_HOST;
	const KEY = config.pterodactyl?.key || process.env.PTERO_KEY;

	const minecraftCheck = server => {
		/*
		 * const returned = '[11:45:37 INFO]: TPS from last 1m, 5m, 15m: 20.0, 20.0, 20.0';
		 * let tps = tps_regex.exec(returned);
		 * if (tps) tps = tps.groups.tps1;
		 * console.log(tps);
		 */
		const ref = db.ref(`services/minecraft/${server}`);
		const history_ref = db.ref(`history/minecraft/${server}`);

		service_ref.set;

	};

	const websiteCheck = website => {

	};


	for (const server of services.minecraft) {
		console.log(server);
	}

	for (const website of services.websites) {
		console.log(website);
	}

	// response.send('ok')
	return null; // important: terminate the function
});