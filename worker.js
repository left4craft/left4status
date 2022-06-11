const check = async () => {

};

addEventListener('scheduled', async event => {
	event.waitUntil(await check());
});
