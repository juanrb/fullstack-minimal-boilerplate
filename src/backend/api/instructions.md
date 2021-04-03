Create api endpoints in this folder

NOTE: use this snippet to queue sequential requests

	const actions = async (acc, v) => {
		await acc;

		return await do_some_action_with_v();
	}

	const list = [ 'value1', 'value2' ];
	await list.reduce(actions, 0);
