const functions = require('firebase-functions');

// https://firebase.google.com/docs/functions/write-firebase-functions

module.exports.summary = functions.https.onRequest(require('./rest/summary'));
module.exports.history = functions.https.onRequest(require('./rest/history'));

module.exports.check = functions.pubsub.schedule('every 3 minutes').onRun(require('./cron/check'));
